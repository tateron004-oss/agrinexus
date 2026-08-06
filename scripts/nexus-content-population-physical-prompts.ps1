param(
  [ValidateSet(1, 2)]
  [int]$Batch
)

$batchOne = @(
  "Could you shape a resume for a warehouse coordinator role?",
  "Work my two seasons keeping the cooperative books into it.",
  "Set up an intake for a traveler back from Ghana.",
  "Add that the fever started yesterday.",
  "Create a weekly soil report for a cassava plot in Guyana.",
  "Change it to Spanish and add a rainfall section.",
  "Bring up source labeled street art images from Accra.",
  "Show another source with a different style."
)

$batchTwo = @(
  "Take me somewhere horn led from Addis Ababa.",
  "Different direction, something glossy from nineteen eighties Japan.",
  "That is enough, make it quiet now.",
  "I need Mwanza on a map.",
  "Who near Huye might sell improved bean seed?",
  "What happened to the soil in the Sahel according to current institutions?",
  "Give me another reputable angle.",
  "Make a buyer facing draft for eighteen sacks of red beans.",
  "Put the price at six thousand five hundred shillings per sack.",
  "Put on morna from Cabo Verde."
)

Add-Type -AssemblyName System.Speech
$speaker = New-Object System.Speech.Synthesis.SpeechSynthesizer
$speaker.Rate = -1
$speaker.Volume = 90
try {
  $prompts = if ($Batch -eq 1) { $batchOne } else { $batchTwo }
  foreach ($prompt in $prompts) {
    $speaker.Speak($prompt)
    Start-Sleep -Seconds 8
  }
} finally {
  $speaker.Dispose()
}
