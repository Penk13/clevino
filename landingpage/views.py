from django.shortcuts import render

# from rest_framework import viewsets
from .serializers import LandingUserSerializer
from .models import LandingUser
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List': 'list/',
        # 'Detail View': 'detail/<str:pk>/',
        'Create': 'create/',
        # 'Update': 'update/<str:pk>/',
        # 'Delete': 'delete/<str:pk>/',
    }
    return Response(api_urls)


@api_view(['GET'])
def userList(request):
    users = LandingUser.objects.all().order_by('-id')
    serializer = LandingUserSerializer(users, many=True)
    return Response(serializer.data)


# @api_view(['GET'])
# def userDetail(request, pk):
#     users = LandingUser.objects.get(id=pk)
#     serializer = LandingUserSerializer(users, many=False)
#     return Response(serializer.data)


@api_view(['POST'])
def userCreate(request):
    serializer = LandingUserSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


# @api_view(['POST'])
# def userUpdate(request, pk):
#     user = LandingUser.objects.get(id=pk)
#     serializer = LandingUserSerializer(instance=user, data=request.data)

#     if serializer.is_valid():
#         serializer.save()

#     return Response(serializer.data)


# @api_view(['DELETE'])
# def userDelete(request, pk):
#     user = LandingUser.objects.get(id=pk)
#     user.delete()

#     return Response('User succsesfully deleted!')
