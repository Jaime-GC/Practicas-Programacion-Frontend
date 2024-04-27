import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          backgroundColor: "#f0f0f0",
        }}
      >
        <image
          src="https://66.media.tumblr.com/073951c7bbe9774840514ab0901836f5/tumblr_pg05o83mRO1r1ult6o1_500.gif"
          alt="404"
        />
        <h1>404 - Page not found</h1>
      </div>
    </>
  );
}
