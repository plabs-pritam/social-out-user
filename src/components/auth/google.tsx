import { FC } from "react";
import { useDispatch } from "react-redux";
import { useToast } from "@agney/ir-toast";
import { IonButton, IonIcon, useIonRouter } from "@ionic/react";
import { authLogin } from "./auth";

const AuthGoogleButton: FC = () => {
	const toast = useToast();
	const router = useIonRouter();
	const dispatch = useDispatch();

	const handleGoogleLogin = async () => {
		try {
			// const googleUser = await (
			// 	window as any
			// ).Capacitor.Plugins.GoogleAuth.signIn(null);
			// if (googleUser.message) {
			// 	toast.error(googleUser.message);
			// } else {
			// let user: any = { authId: 2, ...googleUser };
			let user: any = { authId: 2 };
			user.email = "sidsuvarna97+01@gmail.com";
			await authLogin(user, dispatch, toast, router);
			// }
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	return (
		<div>
			<IonButton
				expand="block"
				color={"tertiary"}
				onClick={() => handleGoogleLogin()}>
				<IonIcon className="me-2" icon="/assets/icons/logoColorGoogle.svg" />
				Continue with Google
			</IonButton>
		</div>
	);
};

export default AuthGoogleButton;
