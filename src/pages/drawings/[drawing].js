import fetch from '../../utils/fetchOne';
import { baseUrl } from '../../../config/server';
import { useRouter } from 'next/router';

const Drawing = ({ item }) => {
	const router = useRouter();
	console.log(item);
	if (!item) {
		return <p>No picture</p>;
	}
	return (
		<div>
			<div>
				<button onClick={() => router.back()}>Go Back</button>
				<img src={baseUrl + item?.picture.formats.medium.url} alt={item.title} />
				<div>
					<h3>{item.title}</h3>
					<p>{item.description}</p>
					<footer>
						<div>
							{item.available && <p>Cena {item.price}</p>}
							<p>Dostępność {item.available ? 'Dostępne' : 'Niedostępne'}</p>
						</div>
					</footer>
				</div>
			</div>
		</div>
	);
};

export async function getStaticPaths() {
	let posts = await fetch(`/posts?category.name=Drawings`);
	const paths = posts.data.map((post) => ({
		params: { drawing: post._id },
	}));
	return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
	// console.log(params);
	let drawing = await fetch(`/posts?_id=${params.drawing}`);

	return {
		props: {
			item: drawing.data[0],
		},
		revalidate: 5,
	};
}

export default Drawing;
