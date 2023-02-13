import 'package:flutter/material.dart';
import 'package:sizer/sizer.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:email_validator/email_validator.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
      options: const FirebaseOptions(
        apiKey: "AIzaSyAj630_55-a4k68ot-76cakJ6xHLBcHmpE",
        appId: "1:127970348109:web:ce3d7a2d620c44c0446004",
        messagingSenderId: "127970348109",
        projectId: "medlar-b99cc",
  )
  );
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return Sizer(
      builder: (BuildContext context, Orientation orientation, DeviceType deviceType) {
        return MaterialApp(
          debugShowCheckedModeBanner: false,
          title: 'Medlar',
          theme: ThemeData(
            primarySwatch: Colors.blue,
          ),
          home: const MyHomePage(),
        );
      },
    );
  }
}



class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  late final TextEditingController _textEditingController = TextEditingController();
  final _formKey = GlobalKey<FormState>();
  var email ='';
  @override
  void dispose() {
    _textEditingController.dispose();
    super.dispose();
  }
  @override
  Widget build(BuildContext context) {

    CollectionReference newsletter = FirebaseFirestore.instance.collection('newsletter');

    return Scaffold(
      backgroundColor:const Color(0xFF367033),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            SizedBox(
              height:25.h,
                width: 25.w,
                child: Image.asset("lib/asset/Medlar.png")
            ),
             Text(
              'A better way to connect People looking to get a project done with Service Providers.',
              style: TextStyle(
                fontSize: 7.sp
              ),
            ),
            Padding(padding: EdgeInsets.only(bottom: 7.h)),
            Text(
            'Coming Soon!',
            style: TextStyle(
                fontSize: 15.sp
              ),
            ),
            Padding(padding: EdgeInsets.only(bottom: 7.h)),
            Text(
              'For now, sign up for Medlar Newsletter to join our developmental progress.',
              style: TextStyle(
                  fontSize: 7.sp
              ),
            ),
            Padding(padding: EdgeInsets.only(bottom:20.h)),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                SizedBox(
                  height:5.h,
                  width: 30.w,
                  child: Padding(
                    padding: EdgeInsets.only(top: 1.h),
                    child: Form(
                      key: _formKey,
                      child: TextFormField(
                        autofillHints: const [AutofillHints.email],
                        onChanged: (value){
                            email = value;
                        },
                          validator: (value){
                            if (value == null || value.isEmpty || !EmailValidator.validate(email)){
                              return 'Please enter a va;od Email Address';
                            }
                            return null;
                          },
                        decoration: const InputDecoration(
                          border: OutlineInputBorder(),
                          hintText: 'Please Enter Your Email',
                      ),
                        controller: _textEditingController,
                  ),
                    ),
                  ),
                ),
                Padding(padding: EdgeInsets.only(right: 2.w)),
                SizedBox(
                  height:5.h,
                  child: ElevatedButton(
                    style: ElevatedButton.styleFrom(backgroundColor: const Color(0xFFe6a90b)),
                    onPressed: (){
                      if (_formKey.currentState!.validate()){
                      newsletter.add({
                        'Email' : email,
                      });
                      }
                      else{
                        return;
                      }
                    },
                    child: const Text("Sign Up",
                    style: TextStyle(
                      color: Colors.black
                    ),),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),

    );
  }
}
