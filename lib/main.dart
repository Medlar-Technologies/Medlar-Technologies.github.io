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
  void initState() {
    _isButtonDisabled = false;
  }
  void _disableButton() {
    setState(() {
      _isButtonDisabled = true;

    });
  }


  @override
  Widget build(BuildContext context) {

    signUpButtonPress(){
      if(_isButtonDisabled){
       final isKeyValidate = _formKey.currentState!.validate();
        try{
          isKeyValidate;
          if (isKeyValidate == true){
            newsletter.add({
              "Email" : email,
            });
            WidgetsBinding.instance.addPostFrameCallback((_) => showSnackBar(context,"Email Was successfully added to the List"));

          } else {
            return null;
          }
        }
        on Exception catch (e){
          showSnackBar(context, e.toString());
        }
      }else {
        return ()
      {
        _disableButton();
      };
      }
    }

  Widget _signUpButton(){
      return SizedBox(
        height:5.h,
        child: ElevatedButton(
          style: ElevatedButton.styleFrom(backgroundColor: _isButtonDisabled ? Colors.grey:  Color(0xFFe6a90b)),
          onPressed: signUpButtonPress(),
          child: Text( _isButtonDisabled ? "Thank You For Signing Up!" : "Sign up",
            style: TextStyle(
                color: Colors.black
            ),),
        ),
      );
  }

  return Scaffold(
      resizeToAvoidBottomInset: true,
      backgroundColor:const Color(0xFF367033),
      body: SingleChildScrollView(
        physics: NeverScrollableScrollPhysics(),
        child: Container(
          height: 100.h,
          width: 100.w,
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
                'Sign Up Today If You Want To Be The First To Use It',
                style: TextStyle(
                    fontSize: 7.sp
                ),
              ),
              Padding(padding: EdgeInsets.only(bottom:20.h)),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  SizedBox(
                    height:6.h,
                    width: 40.w,
                    child: Form(
                      key: _formKey,
                      child: TextFormField(
                        cursorColor: Color(0xFFe6a90b),
                        style: TextStyle(fontSize: 6.sp,
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
                            prefixIcon: Icon(Icons.email,size: 8.sp,),
                            prefixIconColor: Color(0xFFe6a90b),
                            hintText: 'Please Enter Your Email',
                            hintStyle: TextStyle(
                                fontSize: 6.sp,
                                color:Colors.black),
                          contentPadding: EdgeInsets.all(2.5.h),
                          isDense: true,
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
                          )
                      ),
                        controller: _textEditingController,
                    ),
                    ),
                  ),
                  Padding(padding: EdgeInsets.only(right: 2.w)),
                  _signUpButton()
                ],
              ),
            ],
          ),
        ),
      ),

    );
  }
}
