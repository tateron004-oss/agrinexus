$ErrorActionPreference = "Stop"

$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$outDir = Join-Path $root "exports"
$pptxPath = Join-Path $outDir "AgriNexus_Investor_Demo_Video_Storyboard.pptx"
$mp4Path = Join-Path $outDir "AgriNexus_Investor_Demo_Video.mp4"

New-Item -ItemType Directory -Force -Path $outDir | Out-Null
Remove-Item -LiteralPath $pptxPath -Force -ErrorAction SilentlyContinue
Remove-Item -LiteralPath $mp4Path -Force -ErrorAction SilentlyContinue

$slides = @(
  @{
    Title = "AgriNexus"
    Kicker = "Investor demo video"
    Body = "AI-enabled rural operating platform for learning, workforce readiness, accessible telehealth, agricultural trade, logistics, maps, and provider evidence."
    Footer = "Functional workflow demo | Rural deployment model"
    Seconds = 8
  },
  @{
    Title = "The Problem"
    Kicker = "Access is fragmented"
    Body = "Rural communities often face disconnected training, limited healthcare access, weak job pathways, low market visibility, language barriers, and disability access gaps."
    Footer = "AgriNexus connects the workflows instead of leaving them in separate systems."
    Seconds = 9
  },
  @{
    Title = "The Platform"
    Kicker = "One operating layer"
    Body = "The dashboard connects learning, workforce, AFAYAI Health, AgriTrade, Map & AI, Integrations, Admin, and Profile evidence into one coordinated system."
    Footer = "Every module updates state, creates records, and contributes to the operating picture."
    Seconds = 9
  },
  @{
    Title = "Learning Becomes Work"
    Kicker = "Training + readiness"
    Body = "Learners can start courses, complete lessons, take quizzes, issue certificates, build accessibility accommodations, and move into workforce readiness."
    Footer = "The workforce module turns learning records into applications, interviews, mentors, shifts, and earnings."
    Seconds = 10
  },
  @{
    Title = "Accessible Telehealth"
    Kicker = "AFAYAI Health"
    Body = "The health workspace supports patient intake, representative connection, safety review, care planning, caption relay, audio guidance, caregiver handoff, and low-bandwidth fallback."
    Footer = "AI assists the workflow, but human review stays visible."
    Seconds = 11
  },
  @{
    Title = "AgriTrade + Rural Markets"
    Kicker = "Farmers and cooperatives"
    Body = "Product lots, buyer orders, wallet transactions, route checkpoints, logistics movement, and market AI can be coordinated from one commerce workspace."
    Footer = "The model supports farmers, cooperatives, buyers, logistics partners, and funders."
    Seconds = 10
  },
  @{
    Title = "Map & AI"
    Kicker = "Operational intelligence"
    Body = "Country context, facilities, routes, checkpoints, health pressure, logistics movement, and AI recommendations are tied to a live operating view."
    Footer = "English is available directly; Kenya supports Kiswahili, DRC supports French, and Egypt supports Arabic."
    Seconds = 10
  },
  @{
    Title = "Provider Evidence"
    Kicker = "Integration-ready"
    Body = "The demo includes provider engines, integration events, AI governance, notifications, health checks, admin readiness, and a unified profile record."
    Footer = "Production paths include PostgreSQL, OpenAI, HR systems, telehealth systems, SMS/WhatsApp, payment rails, logistics, and market data."
    Seconds = 10
  },
  @{
    Title = "The Ask"
    Kicker = "From demo to pilot"
    Body = "AgriNexus is ready to move from functional prototype into production deployment, live provider credentials, rural field pilots, and partner-supported impact programs."
    Footer = "Built for communities where access, training, care, and economic opportunity need to work together."
    Seconds = 10
  }
)

$ppLayoutBlank = 12
$msoTrue = -1
$msoFalse = 0
$ppSaveAsOpenXMLPresentation = 24
$ppMediaTaskStatusDone = 3
$ppMediaTaskStatusFailed = 4

$ppt = New-Object -ComObject PowerPoint.Application
$ppt.Visible = $msoTrue
$presentation = $ppt.Presentations.Add($msoTrue)
$presentation.PageSetup.SlideWidth = 1920
$presentation.PageSetup.SlideHeight = 1080

function AddText($slide, [string]$text, [double]$left, [double]$top, [double]$width, [double]$height, [int]$size, [string]$color, [bool]$bold = $false) {
  $shape = $slide.Shapes.AddTextbox(1, $left, $top, $width, $height)
  $shape.TextFrame.TextRange.Text = $text
  $shape.TextFrame.TextRange.Font.Name = "Aptos Display"
  $shape.TextFrame.TextRange.Font.Size = $size
  $shape.TextFrame.TextRange.Font.Bold = $(if ($bold) { -1 } else { 0 })
  $shape.TextFrame.TextRange.Font.Color.RGB = [Convert]::ToInt32($color, 16)
  $shape.TextFrame.WordWrap = $msoTrue
  $shape.TextFrame.MarginLeft = 0
  $shape.TextFrame.MarginRight = 0
  $shape.TextFrame.MarginTop = 0
  $shape.TextFrame.MarginBottom = 0
  return $shape
}

foreach ($item in $slides) {
  $slide = $presentation.Slides.Add($presentation.Slides.Count + 1, $ppLayoutBlank)
  $slide.FollowMasterBackground = $msoFalse
  $slide.Background.Fill.ForeColor.RGB = [Convert]::ToInt32("F6F7F1", 16)

  $band = $slide.Shapes.AddShape(1, 0, 0, 1920, 1080)
  $band.Fill.ForeColor.RGB = [Convert]::ToInt32("F6F7F1", 16)
  $band.Line.Visible = $msoFalse

  $accent = $slide.Shapes.AddShape(1, 0, 0, 28, 1080)
  $accent.Fill.ForeColor.RGB = [Convert]::ToInt32("1B8F68", 16)
  $accent.Line.Visible = $msoFalse

  $mark = $slide.Shapes.AddShape(9, 1560, -120, 480, 480)
  $mark.Fill.ForeColor.RGB = [Convert]::ToInt32("D7E6DE", 16)
  $mark.Line.Visible = $msoFalse

  AddText $slide $item.Kicker 120 100 900 70 32 "1B8F68" $true | Out-Null
  AddText $slide $item.Title 120 190 1320 170 76 "153E35" $true | Out-Null
  AddText $slide $item.Body 120 430 1260 250 42 "243B37" $false | Out-Null
  AddText $slide $item.Footer 120 820 1320 110 30 "687A74" $false | Out-Null
  AddText $slide "AgriNexus" 1560 900 260 60 28 "153E35" $true | Out-Null

  $slide.SlideShowTransition.AdvanceOnTime = $msoTrue
  $slide.SlideShowTransition.AdvanceTime = [double]$item.Seconds
}

$presentation.SaveAs($pptxPath, $ppSaveAsOpenXMLPresentation)
$presentation.CreateVideo($mp4Path, $msoTrue, 8, 1080, 30, 85)

$timeout = (Get-Date).AddMinutes(10)
while ($presentation.CreateVideoStatus -ne $ppMediaTaskStatusDone) {
  if ($presentation.CreateVideoStatus -eq $ppMediaTaskStatusFailed) {
    throw "PowerPoint video export failed."
  }
  if ((Get-Date) -gt $timeout) {
    throw "Timed out waiting for PowerPoint video export."
  }
  Start-Sleep -Seconds 2
}

$presentation.Close()
$ppt.Quit()

[System.Runtime.InteropServices.Marshal]::ReleaseComObject($presentation) | Out-Null
[System.Runtime.InteropServices.Marshal]::ReleaseComObject($ppt) | Out-Null

Write-Host "Created PPTX: $pptxPath"
Write-Host "Created MP4: $mp4Path"
