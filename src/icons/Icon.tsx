export const Icon = ({ path, width = 512, height = 512, fill = '#707070' }: propsType): JSX.Element => (
	<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 512 512">
		<path d={path} fill={fill} />
	</svg>
);

interface propsType {
	path: string;
	width?: number;
	height?: number;
	fill?: string;
}
