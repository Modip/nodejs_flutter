import 'package:flutter/material.dart';
import 'screens/login_page.dart';
import 'screens/routes.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Modip Books',
      theme: ThemeData(
        primarySwatch: Colors.blueGrey,
      ),
      debugShowCheckedModeBanner: false,
      //home: const MyHomePage(title: 'Flutter Demo Home Page'),
      home: const RoutePage(),
    );
  }
}
