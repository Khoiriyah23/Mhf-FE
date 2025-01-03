import { Metadata } from 'next';
import React from 'react';
import { TextField, Button } from '@mui/material';
export const metadata: Metadata = {
    title: "Register",
};

export default function Register() {
    return (
        <div className="w-full max-w-md space-y-6 mx-auto mt-12">
            <h1 className="text-2xl font-bold text-center text-gray-800">Create an Account</h1>
            <form className="space-y-6">
                <div>
                    <TextField
                        id="name"
                        label="Enter your Full Name"
                        type="text"
                        variant="outlined"
                        fullWidth
                        required
                        placeholder="Your Name"
                        sx={{
                            backgroundColor: '#f6efd7',
                            '& .MuiOutlinedInput-root': {
                                borderColor: '#ead79b',
                            },
                            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#ead79b',
                            },
                        }}
                    />
                </div>

                <div>
                    <TextField
                        id="email"
                        label="Enter your Email Address"
                        type="email"
                        variant="outlined"
                        fullWidth
                        required
                        placeholder="you@example.com"
                        sx={{
                            backgroundColor: '#f6efd7',
                            '& .MuiOutlinedInput-root': {
                                borderColor: '#ead79b',
                            },
                            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#ead79b',
                            },
                        }}
                    />
                </div>

                <div>
                    <TextField
                        id="password"
                        label="Enter your Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        required
                        placeholder="••••••••"
                        sx={{
                            backgroundColor: '#f6efd7',
                            '& .MuiOutlinedInput-root': {
                                borderColor: '#ead79b',
                            },
                            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#ead79b',
                            },
                        }}
                    />
                </div>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                        backgroundColor: '#424c2c',
                        '&:hover': {
                            backgroundColor: '#c4a974',
                        },
                    }}
                >
                    Register
                </Button>
            </form>

            <p className='text-center'>or</p>

            <div className="text-center">
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                        backgroundColor: '#424c2c',
                        '&:hover': {
                            backgroundColor: '#c4a974',
                        },
                    }}
                >
                    Sign up with Google
                </Button>
            </div>

            <p className="text-sm text-center text-gray-600">
                Already have an account?{" "}
                <a href="/login" className="underline">
                    Log in
                </a>
            </p>
        </div>
    );
}
