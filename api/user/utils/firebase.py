import firebase_admin
from firebase_admin import auth
from rest_framework.views import APIView
from rest_framework import authentication
from rest_framework import exceptions

from user.models import User


class FirebaseAuthentication(authentication.BaseAuthentication):
    def authenticate(self, request):
        auth_header = request.headers.get('Authorization')
        if not auth_header:
            raise exceptions.AuthenticationFailed(
                "Authentication failed: Authorization token was not "
                "provided. Please include a valid token in the "
                "'Authorization' header with the format 'Bearer <token>'."
            )

        # Expecting the token in the format "Bearer <token>"
        try:
            token_type, id_token = auth_header.split()
            if token_type.lower() != 'bearer':
                raise exceptions.AuthenticationFailed(
                    "Authentication failed: Token type is incorrect. "
                    "Expected 'Bearer <token>' format."
                )
            
            # Verify the ID token
            decoded_token = auth.verify_id_token(id_token)
        except ValueError:
            raise exceptions.AuthenticationFailed(
                "Authentication failed: Authorization header is improperly "
                "formatted. Use 'Bearer <token>'."
            )
        except firebase_admin.exceptions.FirebaseError as e:
            raise exceptions.AuthenticationFailed(
                "Authentication failed: Unable to verify the token. Error "
                f"details: {str(e)}. Please re-authenticate.")
        
        try:
            user = User.objects.get(firebase_id=decoded_token['uid'])
        except User.DoesNotExist:
            raise exceptions.AuthenticationFailed(
                "Authentication failed: No matching user found for this "
                "token. Please ensure your account is registered."
            )
        
        return (user, None)
