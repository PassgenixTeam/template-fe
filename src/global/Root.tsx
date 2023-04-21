import { useEffect, useState } from "react";
import { shallowEqual } from "react-redux";
import { BrowserRouter, Outlet } from "react-router-dom";
import Navigator from "../components/Navigator/Navigator";
import Splash from "../components/Splash/Splash";
import AppSuspense from "../services/loading/AppSuspense";
import { joinCls } from "../utilities/text.utils";

import { useAppSelector } from "../redux/hooks/useAppSelector";
import "./style/animation.style.scss";

function Root() {
	const { isPageLoading } = useAppSelector((state) => state.loading, shallowEqual);
	const [isStartedSplash, setIsStartedSplash] = useState(false);

	useEffect(() => {
		if (isPageLoading) setIsStartedSplash(false);
	}, [isPageLoading, setIsStartedSplash]);

	return (
		<BrowserRouter>
			<div className={joinCls("mt-5", isPageLoading || !isStartedSplash ? "invisible" : undefined)}>
				{/* Navigation bar */}
				<Navigator />

				<AppSuspense>
					{/* Page will render here */}
					<Outlet />
				</AppSuspense>
			</div>

			{/* Splash */}
			<Splash onStart={() => setIsStartedSplash(true)} />
		</BrowserRouter>
	);
}

export default Root;
