import Login from ".";
import { oauthProviders } from "../../src/components/Form/form-oauth-providers";

export default function LoginWithProvider(props) {
  return <Login {...props} />;
}

export function getStaticProps() {
  return {
    props: {}
  };
}

export function getStaticPaths() {
  const paths = oauthProviders.map(provider => ({ params: { provider: provider.name } }));
  return {
    paths: paths,
    fallback: false
  };
}
