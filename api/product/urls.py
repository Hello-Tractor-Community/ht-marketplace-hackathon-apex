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
from product import views

urlpatterns = [
    path('tractors/', views.TractorListView.as_view(), name='tractor-list'),
    path(
        'tractors/<str:pk>/', 
        views.TractorDetailView.as_view(), 
        name='tractor-detail',
    ),
    path(
        'tractors/<str:pk>/reviews/', 
        views.TractorReviewList.as_view(), 
        name='tractor-review-list',
    ),
     path(
        'tractors/<str:pk>/reviews/<str:review_pk>/', 
        views.TractorReviewDetail.as_view(), 
        name='tractor-review-detail',
    ),
    path('enquiries/', views.EnquiryListView.as_view(), name='enquiry-list'),
    path(
        'enquiries/<str:pk>/', 
        views.EnquiryDetailView.as_view(), 
        name='enquiry-detail'
    ),
    path(
        'enquiries/<str:pk>/messages/', 
        views.EnquiryMessageListView.as_view(), 
        name='enquiry-message'
    ),
    path(
        'enquiries/<str:pk>/messages/<str:message_pk>/',
        views.EnquiryMessageDetailView.as_view(),
        name='enquiry-message-detail'
    ),
]
