import 'package:flutter/material.dart';

class AllBook extends StatefulWidget {
  const AllBook({Key? key}) : super(key: key);

  @override
  State<AllBook> createState() => _AllBookState();
}

class _AllBookState extends State<AllBook> {
  List<String> data = [
    "Nation nègre et culture",
    "Une si longue lettre",
    "Aventure ambigue",
    "Sous l'orage",
    "L'enfant Noir",
    "Le pagne noir",
    "Une si longue lettre",
    "Sous l'orage",
    "L'enfant Noir",
    "Une si longue lettre",
    "L'enfant Noir",
    "Le pagne noir",
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
                trailing: Container(
                  width: 60,
                  child: Row(
                    children: [
                      Expanded(
                        child: IconButton(
                          onPressed: () {
                            showDialog(
                                context: context,
                                builder: (context) => SimpleDialog(
                                      children: [
                                        TextField(
                                          onChanged: (value) {
                                            setState(() {
                                              text = value;
                                            });
                                          },
                                        ),
                                        ElevatedButton(
                                            onPressed: () {
                                              setState(() {
                                                data[index] = text;
                                              });
                                              Navigator.pop(context);
                                            },
                                            child: const Text("Update"))
                                      ],
                                    ));
                          },
                          icon: const Icon(Icons.edit, color: Colors.white),
                        ),
                      ),
                      Expanded(
                        child: IconButton(
                          onPressed: () {
                            setState(() {
                              data.removeAt(index);
                            });
                          },
                          icon: const Icon(
                            Icons.delete,
                            color: Colors.white70,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}
