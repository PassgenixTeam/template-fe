import { useEffect, useState } from "react";
import { shallowEqual } from "react-redux";
import { Outlet } from "react-router-dom";
import Navigator from "../components/Navigator/Navigator";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import AppSuspense from "../services/loading/AppSuspense";
import { joinCls } from "../utilities/text.utils";
import Splash from "@components/Splash/Splash";

import "./style/animation.style.scss";
import "./style/global.style.scss";

function Root() {
	const { isPageLoading } = useAppSelector((state) => state.loading, shallowEqual);
	const [isStartedSplash, setIsStartedSplash] = useState(false);

	useEffect(() => {
		if (isPageLoading) setIsStartedSplash(false);
	}, [isPageLoading, setIsStartedSplash]);

	return (
		<>
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
		</>
	);
}

export default Root;
