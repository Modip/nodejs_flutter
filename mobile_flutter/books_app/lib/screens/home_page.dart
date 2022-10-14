import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<String> data = [
    "Nation nègre et culture",
    "Une si longue lettre",
    "Aventure ambigue",
    "Sous l'orage",
    "L'enfant Noir",
    "Le pagne noir",
    "Nini mulatresse",
    "Maimouna",
    "Chant d'ombre",
    "Une si longue lettre",
    "Sous l'orage",
    "L'enfant Noir",
    "Une si longue lettre",
    "Le pagne noir",
  ];
  String text = "";
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Modip Books"),
        centerTitle: true,
      ),
      body: ListView.builder(
        itemCount: data.length,
        itemBuilder: (context, index) {
          return Card(
            color: Theme.of(context).primaryColor,
            child: Padding(
              padding: const EdgeInsets.all(20),
              child: ListTile(
                title: Text(
                  data[index],
                  style: const TextStyle(fontSize: 20, color: Colors.white),
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}
