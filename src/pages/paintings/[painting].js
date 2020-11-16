import fetch from '../../utils/fetchOne';
import { baseUrl } from '../../../config/server';
import { useRouter } from 'next/router';

const Painting = ({ item }) => {
	const router = useRouter();
	return (
		<div>
			<div>
				<button onClick={() => router.back()}>Go Back</button>
				<img src={baseUrl + item.picture.formats.medium.url} alt={item.title} />
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
	let posts = await fetch(`/posts?category.name=Paintings`);
	const paths = posts.data.map((post) => ({
		params: { painting: post._id },
	}));
	return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
	console.log(params);
	let res = await fetch(`/posts?_id=${params.painting}`);

	return {
		props: {
			item: res.data[0],
		},
		revalidate: 5,
	};
}

export default Painting;
