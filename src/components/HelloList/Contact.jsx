import styled from 'styled-components';

const Wrapper = styled.li`
	text-align: left;
	width: 300px;

	h2 {
		font-size: 130px;
		margin: 0;
		padding: 0;
		font-weight: light;
	}
`;

export const Contact = () => {
	return (
		<Wrapper>
			<h2>Gonçalo</h2>
		</Wrapper>
	);
};
