interface GreetingProps {
    firstName: String,
    lastName: String,
}

export default function Greeting({ firstName, lastName }: GreetingProps) {
    return(
        <p>Welcome {firstName} {lastName}.</p>
    )
}