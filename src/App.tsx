/** @format */

import React from "react";
import { Route, Switch } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ToastProvider, useToast } from "@agney/ir-toast";

// pages
import ChooseCategories from "./pages/choose-categories/choose-categories";
import NotFound from "./pages/not-found";
import Community from "./pages/community/community";
import Profile from "./pages/profile/profile";
import Chats from "./pages/chats/chats";
import ChooseLocation from "./pages/choose-location/choose-location";
import ChooseLanguage from "./pages/choose-location/choose-language";
import SignUp from "./pages/sign-up/sign-up";
import Login from "./pages/login/login";

// User pages
import Home from "./pages/home/home";
import Events from "./pages/events/events";
import UpcomingEvents from "./pages/events/upcoming-events";
import EventDetails from "./pages/events/event-details";
import BookTicket from "./pages/ticket/book-ticket";
import TicketPreview from "./pages/ticket/TicketPreview";
import CancelTicket from "./pages/ticket/cancel-ticket";
//import UserCommunityDetails from "./pages/community/user/community-description";
import communityMessageList from "./pages/community/community-message/communityMessageList";
import UserChat from "./pages/chats/user-chat";
import EventFilter from "./pages/event-filter";
import SearchEvents from "./pages/search/search-events";
import SearchPosts from "./pages/search/search-post";
import NewPost from "./pages/home/new-post";
import EventTickets from "./pages/events/event-tickets";

setupIonicReact();

const App: React.FC = () => {
	return (
		<IonApp>
			<ToastProvider value={{ duration: 4000 }}>
				<IonReactRouter>
					<IonRouterOutlet>
						<Switch>
							{/* onboarding */}
							<Route exact path="/" component={Login} />
							<Route exact path="/sign-up" component={SignUp} />
							<Route
								exact
								path="/choose-categories"
								component={ChooseCategories}
							/>
							<Route exact path="/choose-location" component={ChooseLocation} />
							<Route exact path="/choose-language" component={ChooseLanguage} />

							{/* User Routes */}
							<Route exact path="/user/home" component={Home} />
							<Route path="/user/search-post" component={SearchPosts} />
							<Route path="/user/new-post" component={NewPost} />
							{/* events */}
							<Route exact path="/user/events" component={Events} />
							<Route exact path="/upcoming-events" component={UpcomingEvents} />
							<Route exact path="/event-details" component={EventDetails} />
							<Route exact path="/event-search" component={SearchEvents} />
							{/* Tickets */}
							<Route exact path="/book-ticket" component={BookTicket} />
							<Route exact path="/ticket-preview" component={TicketPreview} />
							<Route exact path="/cancel-ticket" component={CancelTicket} />
							{/* community */}
							<Route exact path="/user/community" component={Community} />
							<Route
								exact
								path="/community-detail"
								component={communityMessageList}
								// component={UserCommunityDetails}
							/>
							{/* Profile */}
							<Route exact path="/user/profile" component={Profile} />
							<Route exact path="/chats" component={Chats} />
							<Route exact path="/user-chat" component={UserChat} />
							<Route exact path="/event-filter" component={EventFilter} />
							<Route exact path="/event-tickets" component={EventTickets} />
							<Route path="*" component={NotFound} />
						</Switch>
					</IonRouterOutlet>
				</IonReactRouter>
			</ToastProvider>
		</IonApp>
	);
};

export default App;
