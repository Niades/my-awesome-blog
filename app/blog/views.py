from django.views.generic import TemplateView
from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
# from .serializers import ExampleSerializer
# from .models import Example


class IndexView(TemplateView):
    template_name = 'index.html'


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