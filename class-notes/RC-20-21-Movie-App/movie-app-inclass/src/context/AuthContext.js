import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
import { errorToast, successToast } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";

//!context alanı açtık
export const YetkiContext = createContext();

const AuthContext = ({ children }) => {
  const navigate = useNavigate();

  //? burada login register yada google dan gelen displayName ve email i navbarda bastırmak üzere, navbar a gönderebilmek için alttaki state e attık
  const [currentUser, setCurrentUser] = useState();

  //!bu sayfaya ister login ister register ister google için gelin, sadece bir seferliğine user kontrolü yapan fonksiyonu çalıştır
   useEffect(() => {
    userTakip();
  }, []);

  //!register için (sitede zincir yapılı fetch işlemi var biz burada async await i tercih ettik)
  // https://firebase.google.com/docs/auth/web/start?hl=tr


  
  const createUser = async (email, password, displayName) => {
    try {
      //? sitede ilk defa kullanıcı adı oluşturmak için kullanılan firebase metodu
      await createUserWithEmailAndPassword(auth, email, password);

      successToast("Registered Successfully");
      navigate("/");

      //? USERTAKİPTEN SONRA -----kullanıcı profilini güncellemek için kullanılan firebase metodu, login logout da userTakip sayesinde güncelleniyor ama register da isim güncellemesi yok, o da bu şekilde oluyor.alttakini yazmazsam (register ile girdiğimde) navbarda displayName i göremem. alttakini yazmazsam sadece google ile girersem görürüm

      await updateProfile(auth.currentUser, { displayName: displayName });
    } catch (error) {
      errorToast(`${error.message} yanlış girdin`);
    }
  };

  //!login .
  //?  kayıt olduktan sonraki giriş için login den çağırılacak firebase metodu

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      successToast("Logged in Successfully");
      navigate("/");
    } catch (error) {
      errorToast(error.message);
    }
  };

  //!google ile giriş

  //* https://firebase.google.com/docs/auth/web/google-signin?hl=tr

  const signUpGooglE = () => {
    //?google hesaplarına ulaşmak için firebase metodu
    const provider = new GoogleAuthProvider();

    //?açılır pencere ile giriş yapılması için firebase metodu

    signInWithPopup(auth, provider)
      .then((result) => {
        successToast("Google ile giriş başarılı");
        console.log(result);

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu. bir kere çalıştır login logout takip eder.login ile bilgiler gelir bizde burada currentUser ın içine atarız, signout olunca bilgiler gider bizde currentUser ın içini güncelleriz (register ve logindeki email vs ye navbardan ulaşabilmek için). google ile giriş yapınca user ile displayname gelir ama email ile girecekseniz en üstte update kodunu firebase den çağırmalısınız.(userObserver)
  const userTakip = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL } = user;

        setCurrentUser({ email, displayName, photoURL });
      } else {
        setCurrentUser(false);
      }
    });
  };

  //!siteden çıkış
  const cikis = () => {
    signOut(auth);

    successToast("logout is successfully");
  };


  return (
    <YetkiContext.Provider
      value={{
        createUser,
        login,
        signUpGooglE,
        currentUser,
        cikis,
      
      }}
    >
      {children}
    </YetkiContext.Provider>
  );
};

export default AuthContext;
