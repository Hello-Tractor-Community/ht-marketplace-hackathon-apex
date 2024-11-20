"""
URL configuration for PROJECT project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path

from market import views


urlpatterns = [
    path("sellers/", views.SellerList.as_view(), name="seller-list"),
    path(
        "sellers/<str:pk>/", views.SellerDetail.as_view(), 
        name="seller-detail"
    ),
    path("buyers/", views.BuyerList.as_view(), name="buyer-list"),
    path(
        "buyers/<str:pk>/", views.BuyerDetail.as_view(), name="buyer-detail"
    ),
    path("dealers/", views.DealerList.as_view(), name="dealer-list"),
    path(
        "dealers/<str:pk>/", views.DealerDetail.as_view(), 
        name="dealer-detail"
    ),
    path("operators/", views.OperatorList.as_view(), name="operator-list"),
    path(
        "operators/<str:pk>/", views.OperatorDetail.as_view(),
        name="operator-detail"
    ),
]
