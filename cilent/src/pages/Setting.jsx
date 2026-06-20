import React, { useEffect, useState } from 'react'
import Loading from '../componment/Loading'
import {dummyProfileData} from '../assets/assets'
import { Lock } from 'lucide-react'
import ProfileForm from '../componment/ProfileForm'
import ChangePasswordModal from '../componment/ChangePasswordModal'
import { useAuth } from '../context/AuthContext'
import api from '../api/axios'
import toast from 'react-hot-toast'

const Setting = () => {
  const {user} = useAuth()
  const [profile,setProfile] = useState(null)
  const [loading,setLoading] = useState(true)
  const[showPasswordModal,setShowPasswordModal]=useState(false)

  const fetchProfile = async () =>{
    // setProfile(dummyProfileData)
    // setTimeout(() =>{
    //   setLoading(false);
    // },1000);
    try{
      const res = await api.get("/profile")
      const profile = res.data;
      if(profile)setProfile(profile)
    } catch (err){
  toast.error(err?.response?.data?.error || err?.message)
  } finally{
    setLoading(false)
  }
  }
  useEffect(()=>{
    fetchProfile()
  },[])

  if(loading) return <Loading />
  return (
    <div className='animate-fade-in'>
      <div className='page-header'>
        <h1 className='page-title'>
          Settings
        </h1>
         <p className='page-subtitle'>Manage your account and preferences</p>
      </div>
      {profile && <ProfileForm initialData={profile} onSuccess={fetchProfile} />}

      {/* -------change password tigger----- */}
      <div className='card max-w-md p-6 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='p-2.5 bg-slate-100 rounded-lg'>
          <Lock className='w-5 h-5 text-slate-600' />
          </div>
        <div>
        <p className='font-medium text-slate-900'>Password</p>
        <p className='text-sm text-slate-500'>Update youe account password</p>
      </div>
      </div>
      <button onClick={()=>setShowPasswordModal(true)}
      className='btn-secondary text-sm'>
        Change
      </button>
      </div>
      <ChangePasswordModal open={showPasswordModal} onClose={()=>setShowPasswordModal(false)}/>
    </div>
  )
}

export default Setting
