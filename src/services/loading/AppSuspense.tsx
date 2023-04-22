import { Suspense, useEffect } from "react";
import { setPageLoading } from "./redux/loading.slice";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";

function SuspenseFallback() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setPageLoading(true));
		return () => {
			dispatch(setPageLoading(false));
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <></>;
}

export const AppSuspense = ({ children }: AppSuspenseProps) => {
	return <Suspense fallback={<SuspenseFallback />}>{children}</Suspense>;
};
