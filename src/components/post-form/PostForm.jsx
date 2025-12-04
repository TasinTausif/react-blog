import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE } from "../"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import postService from "../../appwrite/post"
import fileService from "../../appwrite/file"

export default function PostForm({post}) {
    const userData = useSelector(state => state.auth.userData)
    const navigate = useNavigate()
    // Watch will monitor the field continuesly. In react form, values are set as setValue. And getValues will give me the valuesm of the form fields
    // Inside the form, we can set default values too
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "", 
            slug: post?.slug || "", 
            content: post?.content || "", 
            status: post?.status || "active", 
        }
    })

    const submit = async(data) => {
        if(post){
            
        }else{

        }
    }

    useCallback(() => {

    }, [])

    return (
        <div>

        </div>
    )
}
