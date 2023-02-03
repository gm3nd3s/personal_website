import styled from 'styled-components';

const Wrapper = styled.li`
	text-align: left;
	width: 300px;

	h1 {
		font-size: 130px;
		margin: 0;
		padding: 0;
		font-weight: bold;
	}
`;

export const About = () => {
	return (
		<Wrapper>
			<h1>Hello.</h1>
		</Wrapper>
	);
};
