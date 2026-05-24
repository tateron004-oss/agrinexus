$ErrorActionPreference = "Stop"

$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$shotDir = Join-Path $root "exports\investor-screenshots"
$outDir = Join-Path $root "exports"
$pptxPath = Join-Path $outDir "AgriNexus_Strong_Investor_Demo.pptx"
$mp4Path = Join-Path $outDir "AgriNexus_Strong_Investor_Demo.mp4"

New-Item -ItemType Directory -Force -Path $outDir | Out-Null
Remove-Item -LiteralPath $pptxPath -Force -ErrorAction SilentlyContinue
Remove-Item -LiteralPath $mp4Path -Force -ErrorAction SilentlyContinue

$introSlides = @(
  @{
    Title = "AgriNexus"
    Kicker = "AI-enabled rural infrastructure"
    Body = "AgriNexus connects learning, workforce readiness, accessible telehealth, agricultural trade, logistics, maps, AI guidance, and provider evidence into one operating platform."
    Footer = "Built for rural communities where access, training, care, and economic opportunity need to work together."
    Seconds = 9
  },
  @{
    Title = "The Rural Challenge"
    Kicker = "Fragmented services limit progress"
    Body = "In many rural areas, especially across African countries, people do not face one isolated barrier. Training may not connect to income. Care may be far from home. Farmers may have products but limited buyer, payment, logistics, or market access."
    Footer = "AgriNexus is designed to connect these broken pathways."
    Seconds = 12
  },
  @{
    Title = "The AgriNexus Model"
    Kicker = "One connected operating system"
    Body = "The platform helps move people from learning to work, from health need to supervised care, from farm production to structured commerce, and from disconnected activity to measurable evidence."
    Footer = "Every module creates workflow records, provider evidence, and operational visibility."
    Seconds = 11
  },
  @{
    Title = "Why It Matters"
    Kicker = "Designed for African countries and rural communities"
    Body = "AgriNexus can help train local talent, support accessible telehealth, connect farmers and cooperatives to markets, improve rural service coordination, and give funders proof of outcomes."
    Footer = "The platform is built for multilingual, low-bandwidth, field-agent-supported deployment."
    Seconds = 11
  }
)

$sectionSlides = @(
  @{
    Title = "Command Dashboard"
    File = "01-dashboard-command-center.png"
    Explain = "The dashboard shows the whole operating picture: learning, workforce, health, trade, map intelligence, integrations, and profile evidence."
    Takeaway = "Investor takeaway: AgriNexus is a coordinated workflow platform, not a collection of landing pages."
    Seconds = 9
  },
  @{
    Title = "Learning & Development"
    File = "02-learning-development.png"
    Explain = "The learning workspace supports courses, lesson progress, quizzes, certificates, AI tutoring, and accessible learning packets."
    Takeaway = "Investor takeaway: training becomes measurable readiness and can connect directly to workforce pathways."
    Seconds = 10
  },
  @{
    Title = "Workforce Pipeline"
    File = "03-workforce-pipeline.png"
    Explain = "The workforce module turns learning records into candidate readiness, applications, interviews, mentor support, shift scheduling, and earnings evidence."
    Takeaway = "Investor takeaway: the platform can prove movement from skills to employment."
    Seconds = 10
  },
  @{
    Title = "AFAYAI Health / Telehealth"
    File = "04-afayai-health-telehealth.png"
    Explain = "The health workspace supports intake, representative connection, safety review, care planning, AI-assisted guidance, and accessibility support."
    Takeaway = "Investor takeaway: telehealth is designed for rural access, disability support, and human-supervised care."
    Seconds = 11
  },
  @{
    Title = "AgriTrade"
    File = "05-agritade-market-operations.png"
    Explain = "AgriTrade coordinates product lots, buyer orders, wallet transactions, market activity, route checkpoints, and logistics movement."
    Takeaway = "Investor takeaway: farmers and cooperatives can connect to structured commerce and payment evidence."
    Seconds = 10
  },
  @{
    Title = "Map & AI"
    File = "06-map-ai-command.png"
    Explain = "The map connects country context, routes, checkpoints, facilities, health pressure, logistics activity, and AI recommendations."
    Takeaway = "Investor takeaway: geography becomes operational intelligence, not decoration."
    Seconds = 10
  },
  @{
    Title = "Integrations"
    File = "07-integrations-provider-layer.png"
    Explain = "The integrations layer shows provider readiness for AI, certificates, workforce, telehealth, notifications, payments, logistics, maps, and persistence."
    Takeaway = "Investor takeaway: the product has a clear path from simulated demo providers to live production APIs."
    Seconds = 10
  },
  @{
    Title = "Admin Control Room"
    File = "08-admin-governance.png"
    Explain = "Admin gives operators visibility into module health, users, audit events, AI governance, notifications, and production readiness."
    Takeaway = "Investor takeaway: the platform includes governance and evidence controls needed for real partners."
    Seconds = 10
  },
  @{
    Title = "Unified Profile"
    File = "09-unified-profile.png"
    Explain = "The profile rolls learning, workforce, health, wallet, trade, and AI activity into one operating record."
    Takeaway = "Investor takeaway: AgriNexus creates a proof layer funders and partners can review."
    Seconds = 9
  }
)

$closingSlides = @(
  @{
    Title = "The Opportunity"
    Kicker = "From functional demo to funded pilots"
    Body = "AgriNexus is ready to move toward production deployment, real provider credentials, rural field pilots, local partner implementation, and measurable impact programs."
    Footer = "The ask: support pilots that connect learning, care, work, trade, and evidence for rural communities."
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

foreach ($item in $introSlides) {
  $slide = $presentation.Slides.Add($presentation.Slides.Count + 1, $ppLayoutBlank)
  AddBackground $slide
  AddText $slide $item.Kicker 120 120 1000 60 30 "1B8F68" $true | Out-Null
  AddText $slide $item.Title 120 220 1250 130 76 "153E35" $true | Out-Null
  AddText $slide $item.Body 120 440 1260 260 40 "263D38" $false | Out-Null
  AddText $slide $item.Footer 120 835 1320 90 28 "687A74" $false | Out-Null
  AddText $slide "AgriNexus" 1575 905 240 50 26 "153E35" $true | Out-Null
  SetTiming $slide $item.Seconds
}

foreach ($item in $sectionSlides) {
  $slide = $presentation.Slides.Add($presentation.Slides.Count + 1, $ppLayoutBlank)
  AddBackground $slide
  AddText $slide $item.Title 90 55 1040 75 44 "153E35" $true | Out-Null
  AddText $slide "Real platform screenshot" 90 125 480 40 22 "1B8F68" $true | Out-Null

  $shotPath = Join-Path $shotDir $item.File
  if (!(Test-Path $shotPath) -and $item.File -eq "05-agritade-market-operations.png") {
    $shotPath = Join-Path $shotDir "05-agritrade-market-operations.png"
  }
  if (!(Test-Path $shotPath)) {
    throw "Missing screenshot: $shotPath"
  }

  $pic = $slide.Shapes.AddPicture($shotPath, $msoFalse, $msoTrue, 90, 180, 1180, 820)
  $pic.Line.Visible = $msoTrue
  $pic.Line.ForeColor.RGB = [Convert]::ToInt32("D7DED9", 16)

  $panel = $slide.Shapes.AddShape(1, 1325, 180, 500, 820)
  $panel.Fill.ForeColor.RGB = [Convert]::ToInt32("FFFFFF", 16)
  $panel.Line.ForeColor.RGB = [Convert]::ToInt32("D7DED9", 16)

  AddText $slide "What this section does" 1360 220 420 45 28 "1B8F68" $true | Out-Null
  AddText $slide $item.Explain 1360 285 410 250 28 "263D38" $false | Out-Null
  AddText $slide "Investor takeaway" 1360 590 420 45 28 "1B8F68" $true | Out-Null
  AddText $slide $item.Takeaway 1360 655 410 220 28 "263D38" $false | Out-Null
  SetTiming $slide $item.Seconds
}

foreach ($item in $closingSlides) {
  $slide = $presentation.Slides.Add($presentation.Slides.Count + 1, $ppLayoutBlank)
  AddBackground $slide
  AddText $slide $item.Kicker 120 120 1000 60 30 "1B8F68" $true | Out-Null
  AddText $slide $item.Title 120 220 1250 130 76 "153E35" $true | Out-Null
  AddText $slide $item.Body 120 440 1260 240 40 "263D38" $false | Out-Null
  AddText $slide $item.Footer 120 800 1320 120 32 "153E35" $true | Out-Null
  SetTiming $slide $item.Seconds
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
