from django.views.generic import TemplateView
from django.contrib.auth import authenticate, login
from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer
# from .models import Example


class IndexView(TemplateView):
    template_name = 'index.html'


@api_view(['POST'])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    if username is not None and password is not None:
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return Response(
                    UserSerializer(
                        request.user
                    ).data
                )
        else:
            return Response({ 'status': 'error', 'msg': 'Неправильный логин или пароль' })
    else:
        return Response({ 'status': 'error', 'msg': 'Проверьте правильность заполнения полей' })

@api_view(['GET'])
def profile_view(request):
    if request.user.is_authenticated():
        return Response(
            UserSerializer(
                request.user
            ).data
        )
    else:
        return Response({ "status": "error", "msg": "Вы не вошли." })

"""
class ExampleViewSet(viewsets.ModelViewSet):
    queryset = Example.objects.all()
    serializer_class = ExampleSerializer


@api_view(['PUT'])
def example_func_api_view(request, id):
    ex = Example.objects.get(pk=id)
    ex.example_field = generate_example_field_value()
    ex.save()
    return Response(
        ExampleSerializer(
            ex
        ).data
    )
"""