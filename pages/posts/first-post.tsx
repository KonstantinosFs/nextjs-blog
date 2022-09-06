// #region JS
/*import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import PtofilePicture from "../../public/images/profile.jpg";
import Alert from "../../components/alert";

export default function FirstPost() {
  return (
    <Layout home>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>Fisrt Post</h1>
      <Image
        src={PtofilePicture}
        width={100}
        height={100}
        alt="Profile Picture"
      />
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
    </Layout>
  );
}*/
// #endregion

// #region TS
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import PtofilePicture from "../../public/images/profileImage.png";
import Alert from "../../components/alert";

export default function FirstPost() {
  return (
    <Layout home>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>Fisrt Post</h1>
      <Image
        src={PtofilePicture}
        width={100}
        height={100}
        alt="Profile Picture"
      />
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
    </Layout>
  );
}
// #endregion
