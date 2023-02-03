import styled from 'styled-components';

import { About } from './About';
import { Work } from './Work';
import { Contact } from './Contact';

const List = styled.ul`
	display: flex;
	flex-direction: column;
	color: ${(props) => props.neutral};
	list-style: none;
	width: 50vw;
	height: 100%;
	align-self: flex-start;
	margin: auto;
	padding: 0;
	align-items: center;
`;

export const HelloList = () => {
	return (
		<List>
			<About />
			<Work />
			<Contact />
		</List>
	);
};
