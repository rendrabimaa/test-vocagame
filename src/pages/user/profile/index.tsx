import ProfileInput from '@/components/ProfileInput'
import ToggleDarkMode from '@/components/ToggleDarkMode'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProfilePage = () => {
  return (
    <div className='bg-blueSecondary dark:bg-orangePrimary w-full'>
        <div className="flex flex-col items-center justify-center">
            <div className="flex justify-end w-full bg-white mx-auto max-w-11/12">
                <ToggleDarkMode />
            </div>
            <div className='bg-blueSecondary w-full h-fit'>
              <div className='w-11/12 max-w-5xl py-2 mx-auto flex justify-between'>
                <Image src='/icon/user-profile.svg' alt='user-logo' width={60} height={60}></Image>
                <Image src='/icon/user-profile.svg' alt='user-logo' width={60} height={60}></Image>
              </div>
              <hr />
              <div className='py-4'></div>
            </div>
            <div className='bg-white h-screen w-full'>
                <div className='bg-blueSecondary w-5/6 max-w-5xl mt-12 py-6 text-center mx-auto text-white rounded-lg'>
                  <p className='font-bold text-3xl'>LOREM</p>
                  
                  <div className='w-1/2 mx-auto text-sm'>
                    <p>
                      &quot;Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...&quot;
                    </p>
                    <p>
                      &quot;There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...&quot;
                    </p>
                  </div>
                </div>
                <div className='mt-8 w-5/6 mx-auto max-w-5xl'>
                  <div className='flex justify-between'>
                    <Image src='/icon/user-profile.svg' alt='user-logo' width={50} height={50}></Image>
                    <button className='bg-greyForth px-6 text-sm rounded-full text-blueForth font-semibold'>🖊  Edit Profile</button>
                  </div>
                  <div className='flex mt-12'>
                    <div className='w-1/4 flex flex-col justify-between'>
                      <div className='flex items-center gap-4'>
                        <Image src='/icon/user-profile.svg' alt='user-logo' width={40} height={40}></Image>
                        <p>Profile</p>
                      </div>
                      <button className='flex items-center gap-4 border-t-2 border-greyPrimary w-5/6 py-4'>
                        <Image src='/icon/logout.svg' alt='logout-icon' width={30} height={30}></Image>
                        <p className='text-red-500'>Logout</p>
                      </button>
                      
                    </div>
                    <div className='border-l-2 border-greyPrimary w-3/4 flex justify-end'>
                        <div className='w-11/12 py-8 px-6 rounded-lg border-greyPrimary shadow-xl'>
                          <p>
                            🖊  Edit Profile
                          </p>
                          <hr />
                          <ProfileInput name='Nama' type='text' value='nama'></ProfileInput>
                          <ProfileInput name='Nama' type='text' value='nama'></ProfileInput>
                          <ProfileInput name='Nama' type='text' value='nama'></ProfileInput>
                          <ProfileInput name='Nama' type='text' value='nama'></ProfileInput>

                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage