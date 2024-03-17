import 'package:flutter/material.dart';
import 'package:flutter_amazon_clone/providers/user_provider.dart';
import 'package:provider/provider.dart';

class HomeScreen extends StatefulWidget {
  static const String routeName='/home';
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    final user= Provider.of<UserProvider>(context).user;
    return const Scaffold(
      body: Center(
        child: Text(
        "hello"
      )),
    );
  }
}