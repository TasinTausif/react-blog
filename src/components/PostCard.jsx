import React from 'react'
import fileService from "../appwrite/file"
import { Link } from 'react-router-dom'

// In appwrite, id is passed in this way $id
export default function PostCard({ $id, title, featuredImage }) {
	return (
		// Link's url starts from the current position, so we don't need to give full path
		<Link to={`/posts/${$id}`}>
			<div className='w-full bg-gray-100 rounded-xl p-4'>
				<div className='w-full justify-center mb-4'>
					<img
						src={fileService.getFilePreview(featuredImage)}
						alt={title}
						className='rounded-xl'
					/>
				</div>
				<h2 className='text-xl font-bold'>
					{title}
				</h2>
			</div>
		</Link>
	)
}
