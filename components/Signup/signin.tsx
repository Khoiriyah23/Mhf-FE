import React, { FormEvent } from 'react';
import { useRouter } from 'next/router';
import Button from '../Button';

const SignIn = () => {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      router.push('/'); // Redirect to the landing page
    } else {
      // Handle errors (you can display an error message)
      console.error('Login failed');
    }
  }

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[90%] max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome Back here</h1>
        <p className="text-gray-600 mb-6">Please enter your details</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Enter your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Enter your Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label>
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#forgot-password" className="text-green-500 hover:underline">
              Forgot Password
            </a>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            title="Login"
            icon=""
            variant="green"
            className="px-6 py-2 mt-4 w-full flex items-center justify-center space-x-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition"
          />

          {/* Sign in with Google Button */}
          <Button
            type="button"
            title="Sign in with Google"
            icon=""
            variant="green"
            className="px-6 py-2 mt-4 w-full flex items-center justify-center space-x-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition"
            // onClick={() => alert('Sign in with Google not implemented')}
          />
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don’t have an account yet?{' '}
          <a href="#create-account" className="text-green-500 hover:underline">
            Create Account
          </a>
        </p>
      </div>
    </section>
  );
};

export default SignIn;
