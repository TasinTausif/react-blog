import fileService from "../appwrite/file"
import { Link } from 'react-router-dom'

// In appwrite, id is passed in this way $id
export default function PostCard({ $id, title, featuredImage, ...props }) {
	return (
		<Link to={`/post/${$id}`}>
			<div className='w-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full'>
				<div className='w-full aspect-video'>
					<img
						src={fileService.getFilePreview(featuredImage)}
						alt={title}
						className='w-full h-full object-cover'
					/>
				</div>
				<div className='p-4 flex flex-col flex-grow'>
					<h2 className='text-xl font-bold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors'>
						{title}
					</h2>
					{props.authorName && (
						<p className="text-sm text-gray-500 mt-auto">By {props.authorName}</p>
					)}
				</div>
			</div>
		</Link>
	)
}
