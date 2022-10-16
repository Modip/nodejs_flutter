import 'package:books_app/screens/addBook_page.dart';
import 'package:books_app/screens/home_page.dart';
import 'package:books_app/screens/admin/allBook_page.dart';
import 'package:books_app/screens/login_page.dart';
import 'package:flutter/material.dart';

class RoutePage extends StatefulWidget {
  const RoutePage({Key? key}) : super(key: key);

  @override
  State<RoutePage> createState() => _RoutePageState();
}

class _RoutePageState extends State<RoutePage> {
  bool switchPage = true;
  void togPage() {
    setState(() {
      switchPage = !switchPage;
    });
  }

  @override
  Widget build(BuildContext context) {
    if (switchPage) {
      //return AllBook();
      return Login(togPage: togPage);
    }
    return AddBook(togPage: togPage);
  }
}