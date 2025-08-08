terraform
resource "google_cloudbuild_v2_repository" "rody" {
  project     = "gothic-cursor-419818"
  location    = "europe-west2"
  parent_connection = "projects/gothic-cursor-419818/locations/europe-west2/connections/new-connection"
  name        = "rody"
  remote_uri  = "https://github.com/MAHMOUDEZZ12/rody.git"
}