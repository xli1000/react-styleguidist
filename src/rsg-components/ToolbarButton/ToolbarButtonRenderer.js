import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';
import cx from 'classnames';

const SIZE = 24;

export const styles = ({ space, color }) => ({
	button: {
		color: color.light,
		background: 'transparent',
		transition: 'color 750ms ease-out',
		cursor: 'pointer',
		'&:hover, &:focus': {
			isolate: false,
			color: color.linkHover,
			transition: 'color 150ms ease-in',
		},
		'&:focus': {
			isolate: false,
			outline: [[1, 'solid', color.linkHover]],
			outlineOffset: space[0],
		},
		'& + &': {
			isolate: false,
			marginLeft: space[1],
		},
		// Style react-icons icon passed as children
		'& svg': {
			width: SIZE,
			height: SIZE,
			color: 'currentColor',
		},
	},
});

export function ToolbarButtonRenderer({ classes, className, onClick, href, title, children }) {
	const classNames = cx(classes.button, className);

	if (href !== undefined) {
		return (
			<a href={href} title={title} className={classNames}>
				{children}
			</a>
		);
	}

	return (
		<button type="button" onClick={onClick} title={title} className={classNames}>
			{children}
		</button>
	);
}

ToolbarButtonRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	href: PropTypes.string,
	onClick: PropTypes.func,
	title: PropTypes.string,
	children: PropTypes.node,
};

export default Styled(styles)(ToolbarButtonRenderer);