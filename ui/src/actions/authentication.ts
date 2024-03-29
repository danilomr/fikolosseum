export const playerLogIn = (playerAuth) => {
	return async (dispatch) => {
		try {
			await fetch('/api/fikolosseum/external/authentication-v1/player-auth', {
				method: 'PUT',
				headers: {
					playerName: playerAuth.playerName,
				},
			}).then((response) => {
				if (resp.status == 200 || resp.status == 201) {
				}
			});
		} catch (error) {}
	};
};

export const playerLogOut = () => {
	return async (dispatch) => {
		try {
			await fetch('/api/fikolosseum/room-v1//{roomId}/log-out', {
				method: 'PUT',
			}).then((response) => {
				if (resp.status == 200 || resp.status == 201) {
				}
			});
		} catch (error) {}
	};
};
