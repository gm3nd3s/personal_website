import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: flex-end;
	position: fixed;
	top: 0;
	left: 0;
	gap: 0;
	flex-direction: row;
	background-color: ${(props) => props.background};
`;

const Image = styled.div`
	width: 40vw;
	height: 100%;

	align-self: flex-end;
	background-image: url('/DSC_3904.jpg');
	background-repeat: no-repeat;
	background-size: cover;
`;

export const Background = () => {
	return (
		<Wrapper>
			<Image />
		</Wrapper>
	);
};
