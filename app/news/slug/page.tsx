type Props = {
    params: {
        slug: string;
    };
};

export default async function Page(Props: Props) {
    return <div>{JSON.stringify(Props)}</div>;
}