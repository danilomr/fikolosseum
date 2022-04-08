export const playerLogIn = (playerAuth) => {
	return async (dispatch) => {
		try {
			await fetch('/api/fikagame/external/authentication-v1/player-auth-test', {
				method: 'PUT',
				headers: {
					playerName: playerAuth.playerName,
				}
			}).then((response) => {
				if (resp.status == 200 || resp.status == 201) {

				}
			});
		} catch (error) {
			let a = 1;
		}
	}
}

export const playerLogOut = () => (dispatch, getState) => {
	const { [entity]: payload } = getState().entities;

	dispatch(
		changeInvestigation({
			type: ChangeInvestigationType.UPDATE,
			payload: normalizedPayload,
		})
	);
}
