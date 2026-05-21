"use client";
import { Check } from "@gravity-ui/icons";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { object } from "better-auth";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";



const LoginPage = () => {


    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,

            // callbackURL: "/dashboard" // A URL to redirect to after the user verifies their email (optional)
        },
            {
                onRequest: (ctx) => {

                },
                onSuccess: (ctx) => {

                },
                onError: (ctx) => {

                    alert(ctx.error.message);
                },
            });

        if (data) {
            redirect('/')
        }


        console.log({ data, error });

    }
    const handleSignInWithGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }




    return (
        <div className="max-w-7xl mx-auto">
            <div className=" grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-center py-10">
                <div className="p-10">
                    <h1 className="text-4xl font-bold text-blue-600 text-center pb-5">Log in</h1>
                    <p className="text-gray-600 text-center">Log in for full access</p>
                    <p className="text-center text-2xl text-blue-600 mt-6 mb-2 ">Don't have any account.</p>
                    <Link
                        href="/signup"
                        className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors mx-auto max-w-60"
                    >
                        Create account
                    </Link>

                </div>



                <Card className="w-max-4xl mx-auto flex justify-center">
                    <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
                        {/* <TextField
                            isRequired
                            name="name"
                            type="text"
                        >
                            <Label>
                                Name
                            </Label>
                            <Input placeholder="Enter your name"></Input>
                            <FieldError />
                        </TextField>

                        <TextField

                            name="image"
                            type="url"
                        >
                            <Label>
                                Profile Picture
                            </Label>
                            <Input placeholder="Add a image link"></Input>
                            <FieldError />
                        </TextField> */}


                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label>Email</Label>
                            <Input placeholder="john@example.com" />
                            <FieldError />
                        </TextField>





                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                return null;
                            }}
                        >
                            <Label>Password</Label>
                            <Input placeholder="Enter your password" />
                            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                            <FieldError />
                        </TextField>
                        <div className="flex justify-center">
                            <Button type="submit" className="w-full">

                                Log in
                            </Button>
                        </div>
                    </Form>
                    <p className="text-xl text-center">Or</p>
                    <div className="text-center">
                        <Button onClick={handleSignInWithGoogle} className="w-full">Log in with Google</Button>
                    </div>
                </Card>

            </div>
        </div>
    );
};

export default LoginPage;