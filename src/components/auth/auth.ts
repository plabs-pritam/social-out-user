import { setUser } from "../../store/reducer/user";
import { requestQuery } from "../../utils/request-query";
import { checkUserOnBoard, login } from "../../services/auth";
import { Preferences } from "@capacitor/preferences";

export const authLogin = async (
  user: any,
  dispatch: any,
  toast: any,
  router: any
) => {
  try {
    let payload: any = {
      Password: "",
      email: user.email,
      AuthID: user.authId,
    };
    payload = requestQuery(payload);
    const response = await login(payload);
    if (response.ok) {
      let userPayload = { ...user, ...(response.data as any)[0] };
      await Preferences.set({
        key: "userAuth",
        value: JSON.stringify(userPayload),
      });
      return checkUserIsOnBoarded(userPayload, dispatch, router);
    }
  } catch (error: any) {
    toast.error(error.message);
  }
};

const checkUserIsOnBoarded = async (user: any, dispatch: any, router: any) => {
  try {
    let query: any = {
      email: user.email,
      OauthID: user.authId,
    };
    query = requestQuery(query);
    const response = await checkUserOnBoard(query);
    if (response.ok) {
      dispatch(setUser(user));
      if ((response.data as any)?.IsOnBoarded) {
        router.push("/user/home", "forward", "push");
      } else {
        router.push("/choose-categories", "forward", "push");
      }
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};
