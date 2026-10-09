# A copy of the database image the deploy proof needs, kept in this repository's own GitHub registry because Docker Hub's free pull limit kept failing the proof
# (see .github/workflows/mirror-pgvector-image.yml). The label links the package to this repository so the proof can pull it with the built-in token.
FROM pgvector/pgvector:pg17
LABEL org.opencontainers.image.source="https://github.com/tateron004-oss/agrinexus"
LABEL org.opencontainers.image.description="pgvector/pgvector:pg17 mirrored for the deploy proof"
