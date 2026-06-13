$ErrorActionPreference = "Stop"

$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$shotDir = Join-Path $root "exports\investor-screenshots"
$outDir = Join-Path $root "exports"
$pptxPath = Join-Path $outDir "AgriNexus_Step_By_Step_Training_Video.pptx"
$mp4Path = Join-Path $outDir "AgriNexus_Step_By_Step_Training_Video.mp4"

New-Item -ItemType Directory -Force -Path $outDir | Out-Null
Remove-Item -LiteralPath $pptxPath -Force -ErrorAction SilentlyContinue
Remove-Item -LiteralPath $mp4Path -Force -ErrorAction SilentlyContinue

$introSlides = @(
  @{
    Title = "AgriNexus Training"
    Kicker = "Step-by-step platform walkthrough"
    Body = "This training video shows how to use each major section of AgriNexus: Dashboard, Learning, Workforce, AFAYAI Health, AgriTrade, Map & AI, Integrations, Admin, and Profile."
    Footer = "Use this as a guided operator, partner, or field-team training video."
    Seconds = 10
  },
  @{
    Title = "How To Use This Training"
    Kicker = "Watch, pause, practice"
    Body = "Each section explains what the workspace does, what to click, and what result to look for. The goal is to learn how the platform moves users through real workflows."
    Footer = "Recommended flow: watch once, then replay while practicing in the browser."
    Seconds = 10
  }
)

$trainingSlides = @(
  @{
    Title = "1. Dashboard"
    File = "01-dashboard-command-center.png"
    Purpose = "Use the Dashboard as the command center for the whole platform."
    Steps = @(
      "Review summary cards for countries, patients, facilities, and orders.",
      "Check the work queue for active learning, health, workforce, trade, and AI tasks.",
      "Click Run investor proof run to populate a complete scenario.",
      "Use module cards to move into the next workflow."
    )
    Result = "You should see recent activity, storyboard evidence, and a clear overview of the platform."
    Seconds = 14
  },
  @{
    Title = "2. Country & Language"
    File = "01-dashboard-command-center.png"
    Purpose = "Use the top selector to change language or country context."
    Steps = @(
      "Choose English to return content to English.",
      "Choose Nigeria for Nigeria country context.",
      "Choose Kenya for Kiswahili-supported Kenya context.",
      "Choose DRC for French-supported DRC context.",
      "Choose Egypt for Arabic-supported Egypt context."
    )
    Result = "The platform updates country, route, map, and language behavior for the selected context."
    Seconds = 14
  },
  @{
    Title = "3. Learning & Development"
    File = "02-learning-development.png"
    Purpose = "Use Learning to start courses, complete lessons, take quizzes, and issue certificates."
    Steps = @(
      "Open Learning from the left navigation.",
      "Click Start course or Complete lesson.",
      "Click Complete quiz to update assessment progress.",
      "Click Issue certificate when the learner is ready.",
      "Review Learning Record, Certificates, and Provider Evidence."
    )
    Result = "Learning progress updates readiness, activity, certificates, and evidence."
    Seconds = 16
  },
  @{
    Title = "4. Accessible Learning"
    File = "02-learning-development.png"
    Purpose = "Use Accessible Learning Mode for hearing, visual, and low-bandwidth support."
    Steps = @(
      "Click Build captions for caption and transcript support.",
      "Click Create audio guide for screen-reader and audio support.",
      "Click Send offline packet for low-bandwidth learners.",
      "Review the Learner Accommodation Plan."
    )
    Result = "The platform records accessibility support as part of the learning workflow."
    Seconds = 14
  },
  @{
    Title = "5. Workforce Pipeline"
    File = "03-workforce-pipeline.png"
    Purpose = "Use Workforce to move from training readiness into job opportunity."
    Steps = @(
      "Open Workforce.",
      "Review candidate readiness, eligibility, stage, and earnings.",
      "Click Build profile, Schedule interview, Assign mentor, and Start shift.",
      "Review Applications and Shift Schedule.",
      "Scroll to Role Marketplace to review available roles."
    )
    Result = "The candidate profile now shows progress from learning toward work."
    Seconds = 16
  },
  @{
    Title = "6. AFAYAI Health"
    File = "04-afayai-health-telehealth.png"
    Purpose = "Use AFAYAI Health for rural telehealth intake and care coordination."
    Steps = @(
      "Open AFAYAI Health.",
      "Click Start intake to create a patient record.",
      "Click Connect representative for handoff support.",
      "Click Run safety review.",
      "Click Generate care plan."
    )
    Result = "The health workspace records intake, representative support, safety review, and care-plan evidence."
    Seconds = 16
  },
  @{
    Title = "7. Accessible Telehealth"
    File = "04-afayai-health-telehealth.png"
    Purpose = "Use accessibility tools for hearing-impaired, visually-impaired, and low-bandwidth patients."
    Steps = @(
      "Click Build access plan.",
      "Click Start caption relay for hearing support.",
      "Click Notify caregiver for family, aide, or field-agent handoff.",
      "Review Accessibility Case Notes."
    )
    Result = "Care support now includes captions, audio guidance, caregiver handoff, and low-bandwidth fallback."
    Seconds = 15
  },
  @{
    Title = "8. AgriTrade"
    File = "05-agritrade-market-operations.png"
    Purpose = "Use AgriTrade to manage agricultural orders, wallet activity, and logistics."
    Steps = @(
      "Open Agritrade.",
      "Click Create order on a product.",
      "Click Advance order to move logistics forward.",
      "Click M-Pesa, MTN, or Airtel wallet payment.",
      "Click Price AI or Route AI for guidance."
    )
    Result = "The platform records market activity, payments, order progress, and trade evidence."
    Seconds = 16
  },
  @{
    Title = "9. Map & AI"
    File = "06-map-ai-command.png"
    Purpose = "Use Map & AI to review geography, routes, checkpoints, facilities, and AI guidance."
    Steps = @(
      "Open Map & AI.",
      "Review country, route, checkpoint, risk, and queue.",
      "Click Run command center.",
      "Click Inspect route.",
      "Click Assess route risk.",
      "Review Layer Status, Route Intelligence, and AI Run History."
    )
    Result = "Map activity becomes operational intelligence tied to the active country and route."
    Seconds = 17
  },
  @{
    Title = "10. Integrations"
    File = "07-integrations-provider-layer.png"
    Purpose = "Use Integrations to review and test provider connections."
    Steps = @(
      "Open Integrations.",
      "Review provider cards for each module.",
      "Click Test provider on selected cards.",
      "Review Integration Events.",
      "Check Module Activation and Environment Readiness."
    )
    Result = "The platform shows evidence that provider pathways are ready to connect to live systems."
    Seconds = 15
  },
  @{
    Title = "11. Admin Control Room"
    File = "08-admin-governance.png"
    Purpose = "Use Admin for oversight, health checks, AI governance, notifications, and audit activity."
    Steps = @(
      "Open Admin.",
      "Click Run health check.",
      "Run an AI test from the AI Integration Console.",
      "Approve or reject the latest AI result.",
      "Send module notifications and review audit feed."
    )
    Result = "Operators can see system health, AI evidence, governance, notifications, and readiness."
    Seconds = 16
  },
  @{
    Title = "12. Unified Profile"
    File = "09-unified-profile.png"
    Purpose = "Use Profile as the proof layer for the whole platform."
    Steps = @(
      "Open Profile.",
      "Review learning progress.",
      "Review workforce readiness.",
      "Review health activity.",
      "Review wallet, orders, and AI activity."
    )
    Result = "The user profile shows one connected record across learning, work, care, trade, and AI."
    Seconds = 14
  }
)

$closingSlides = @(
  @{
    Title = "Training Complete"
    Kicker = "What to remember"
    Body = "AgriNexus is strongest when used as a connected workflow. Learning leads to readiness. Readiness leads to work. Telehealth supports care access. AgriTrade supports farmers. Map & AI supports decisions. Admin and Profile preserve evidence."
    Footer = "One platform: learn, work, access care, trade, coordinate, and prove impact."
    Seconds = 12
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
  $shape.TextFrame.TextRange.Font.Name = "Aptos"
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

function AddBackground($slide) {
  $slide.FollowMasterBackground = $msoFalse
  $slide.Background.Fill.ForeColor.RGB = [Convert]::ToInt32("F7F8F3", 16)
  $bar = $slide.Shapes.AddShape(1, 0, 0, 32, 1080)
  $bar.Fill.ForeColor.RGB = [Convert]::ToInt32("1B8F68", 16)
  $bar.Line.Visible = $msoFalse
  $circle = $slide.Shapes.AddShape(9, 1540, -150, 520, 520)
  $circle.Fill.ForeColor.RGB = [Convert]::ToInt32("DCE9E2", 16)
  $circle.Line.Visible = $msoFalse
}

function SetTiming($slide, [int]$seconds) {
  $slide.SlideShowTransition.AdvanceOnTime = $msoTrue
  $slide.SlideShowTransition.AdvanceTime = [double]$seconds
}

function AddIntroSlide($item) {
  $slide = $presentation.Slides.Add($presentation.Slides.Count + 1, $ppLayoutBlank)
  AddBackground $slide
  AddText $slide $item.Kicker 120 120 1000 60 30 "1B8F68" $true | Out-Null
  AddText $slide $item.Title 120 220 1250 130 76 "153E35" $true | Out-Null
  AddText $slide $item.Body 120 440 1260 260 40 "263D38" $false | Out-Null
  AddText $slide $item.Footer 120 835 1320 90 28 "687A74" $false | Out-Null
  AddText $slide "AgriNexus" 1575 905 240 50 26 "153E35" $true | Out-Null
  SetTiming $slide $item.Seconds
}

foreach ($item in $introSlides) {
  AddIntroSlide $item
}

foreach ($item in $trainingSlides) {
  $slide = $presentation.Slides.Add($presentation.Slides.Count + 1, $ppLayoutBlank)
  AddBackground $slide
  AddText $slide $item.Title 90 50 1100 75 42 "153E35" $true | Out-Null
  AddText $slide $item.Purpose 90 122 1170 46 24 "1B8F68" $true | Out-Null

  $shotPath = Join-Path $shotDir $item.File
  if (!(Test-Path $shotPath)) {
    throw "Missing screenshot: $shotPath"
  }
  $pic = $slide.Shapes.AddPicture($shotPath, $msoFalse, $msoTrue, 90, 190, 1080, 760)
  $pic.Line.Visible = $msoTrue
  $pic.Line.ForeColor.RGB = [Convert]::ToInt32("D7DED9", 16)

  $panel = $slide.Shapes.AddShape(1, 1225, 190, 600, 760)
  $panel.Fill.ForeColor.RGB = [Convert]::ToInt32("FFFFFF", 16)
  $panel.Line.ForeColor.RGB = [Convert]::ToInt32("D7DED9", 16)

  AddText $slide "Steps" 1260 225 500 40 28 "1B8F68" $true | Out-Null
  $stepsText = ""
  for ($i = 0; $i -lt $item.Steps.Count; $i++) {
    $stepsText += "$($i + 1). $($item.Steps[$i])`r"
  }
  AddText $slide $stepsText.Trim() 1260 285 525 360 24 "263D38" $false | Out-Null
  AddText $slide "What success looks like" 1260 695 500 40 26 "1B8F68" $true | Out-Null
  AddText $slide $item.Result 1260 750 520 125 24 "263D38" $false | Out-Null
  SetTiming $slide $item.Seconds
}

foreach ($item in $closingSlides) {
  AddIntroSlide $item
}

$presentation.SaveAs($pptxPath, $ppSaveAsOpenXMLPresentation)
$presentation.CreateVideo($mp4Path, $msoTrue, 8, 1080, 30, 85)

$timeout = (Get-Date).AddMinutes(12)
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
