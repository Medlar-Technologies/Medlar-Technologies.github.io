import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:sizer/sizer.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:email_validator/email_validator.dart';
import 'show_snack_bar.dart';

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
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return Sizer(
      builder: (BuildContext context, Orientation orientation, DeviceType deviceType) {
        return MaterialApp(
          scrollBehavior: MaterialScrollBehavior().copyWith(
            dragDevices: {PointerDeviceKind.mouse, PointerDeviceKind.touch, PointerDeviceKind.stylus, PointerDeviceKind.unknown},
          ),
          debugShowCheckedModeBanner: false,
          title: 'Medlar',
          theme: ThemeData(
            primarySwatch: Colors.blue,
          ),
          home:  MyHomePage(),
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



  CollectionReference newsletter = FirebaseFirestore.instance.collection('newsletter');

  late final TextEditingController _textEditingController = TextEditingController();

  final _formKey = GlobalKey<FormState>();

  var email ='';

  @override
  void dispose() {
    _textEditingController.dispose();
    super.dispose();
  }


  late bool _isButtonDisabled;

  @override
   initState() {
    _isButtonDisabled = false;
  }
   _disableButton() {
    setState(() {
      _isButtonDisabled = true;

    });
  }
  Widget _signUpButton(){
    return SizedBox(
      height:5.h,
      child: ElevatedButton(
        style: ElevatedButton.styleFrom(backgroundColor: _isButtonDisabled ?  Colors.grey :  Color(0xFFe6a90b)),
        onPressed: (){
          if (_formKey.currentState!.validate() == true){
            newsletter.add({
              "Email" : email,
            });
            WidgetsBinding.instance.addPostFrameCallback((_) => showSnackBar(context,"Email Was successfully added to the List"));
            _disableButton();
          } else {
            return null;
          }
        },
        child: Text( _isButtonDisabled ? "Thank You For Signing Up!" :"Sign up",
          style: TextStyle(
              color: Colors.black
          ),
          textAlign: TextAlign.center,
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {

  return Scaffold(
      resizeToAvoidBottomInset: true,
      backgroundColor:const Color(0xFF367033),
      body: SingleChildScrollView(
        physics: BouncingScrollPhysics(),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            SizedBox(   // Widget for not mobile
                width: 40.w,
              height: 40.h,
              child: Image.asset("lib/asset/Medlar.png"),
              ),
             Text(
              'A Better Way to Connect People Who are Looking to Get a Project Done with Service Providers.',
              style: TextStyle(
                fontSize: 14.sp
              ),
               textAlign: TextAlign.center,
            ),
            Padding(padding: EdgeInsets.only(bottom:15.h)),
            Text(
            'Coming Soon!',
            style: TextStyle(
                fontSize: 24.sp
              ),
              textAlign: TextAlign.center,
            ),
            Padding(padding: EdgeInsets.only(bottom: 15.h)),
            Text(
              'Sign Up Today If You Want To Be The First To Use It',
              style: TextStyle(
                  fontSize: 14.sp
              ),
              textAlign: TextAlign.center,
            ),
            Padding(padding: EdgeInsets.only(bottom:10.h)),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                SizedBox(
                  height:15.h,
                  width: 55.w,
                  child: Center(
                    child: Form(
                      key: _formKey,
                      child: TextFormField(
                        textAlign: TextAlign.start,
                        textAlignVertical: TextAlignVertical.center,
                        cursorColor: Color(0xFFe6a90b),
                        style: TextStyle(fontSize: 15.sp,
                        color: Color(0xFFe6a90b)),
                        autofillHints: [AutofillHints.email],
                        onChanged: (value){
                            email = value;
                        },
                          validator: (value){
                            if (value == null || value.isEmpty || !EmailValidator.validate(email)){
                              return 'Please enter a valid Email Address';
                            }
                            return null;
                          },
                        decoration: InputDecoration(
                          contentPadding: EdgeInsets.symmetric(vertical: 2.h),
                            prefixIcon: Icon(Icons.email,size: 10.sp,),
                            prefixIconColor: Color(0xFFe6a90b),
                            hintText: 'Please Enter Your Email',
                            hintStyle: TextStyle(
                                fontSize:8.sp,
                                color:Colors.grey.withOpacity(0.7)),
                          isDense: false,
                          focusedBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(1.h),
                            borderSide: BorderSide(
                              color: Color(0xFFe6a90b),
                            )
                          ),
                          enabledBorder: OutlineInputBorder(
                            borderRadius:BorderRadius.circular(1.h),
                            borderSide: BorderSide(
                              color: Color(0xFFe6a90b),
                          )
                          ),
                          errorBorder: OutlineInputBorder(
                              borderRadius:BorderRadius.circular(1.h),
                              borderSide: BorderSide(
                                color: Colors.red,
                              )
                          ),
                          focusedErrorBorder: OutlineInputBorder(
                              borderRadius:BorderRadius.circular(1.h),
                              borderSide: BorderSide(
                                color: Colors.red,
                              )
                          ),
                      ),
                        controller: _textEditingController,
                    ),
                    ),
                  ),
                ),
                Padding(padding: EdgeInsets.only(right: 2.w)),
                _signUpButton(),
              ],
            ),
            Padding(padding: EdgeInsets.only(top: 10.h)),
          ],
        ),
      ),

    );
  }
}
