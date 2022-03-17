import { config } from 'dotenv';
config();

const {
    CLIEN_ID,
    PROJECT_ID,
    AUTH_URI,
    TOKEN_URI,
    AUTH_PROVIDER_X509_CERT_URL,
    CLIENT_SECRET,
    REDIRECT_URIS,
    JAVASCRIPT_ORIGINS
} = process.env

export const client_secret_google = {
    client_id: "6572826555-ber153tq20k3j3ur882qq5v2l111a602.apps.googleusercontent.com",
    project_id: PROJECT_ID,
    auth_uri: AUTH_URI,
    token_uri: TOKEN_URI,
    auth_provider_x509_cert_url: AUTH_PROVIDER_X509_CERT_URL,
    client_secret: CLIENT_SECRET,
    redirect_uris: REDIRECT_URIS,
    javascript_origins: JAVASCRIPT_ORIGINS
}