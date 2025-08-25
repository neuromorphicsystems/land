---
{
    "name": "NE2I",
    "aliases": [],
    "year": 2024,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [],
    "category": "Filtering and De-noising",
    "tags": [
        "Monitor Conversion",
        "De-noising",
        "Frame Reconstruction"
    ],
    "description": "Noise to image extraction",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "HDF5"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://berkeley.app.box.com/s/z9s21gs3tyrfpngzl9he66mr9s4kp1up",
                "format": "HDF5",
                "available": true
            }
        ],
        "size_gb": 177.0,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "Noise2Image: Noise-Enabled Static Scene Recovery for Event Cameras",
        "doi": "10.1364/OPTICA.538916",
        "authors": [
            "Ruiming Cao",
            "Dekel Galor",
            "Amit Kohli",
            "Jacob L. Yates",
            "Laura Waller"
        ],
        "abstract": "Event cameras capture changes of intensity over time as a stream of 'events' and generally cannot measure intensity itself; hence, they are only used for imaging dynamic scenes. However, fluctuations due to random photon arrival inevitably trigger noise events, even for static scenes. While previous efforts have been focused on filtering out these undesirable noise events to improve signal quality, we find that, in the photon-noise regime, these noise events are correlated with the static scene intensity. We analyze the noise event generation and model its relationship to illuminance. Based on this understanding, we propose a method, called Noise2Image, to leverage the illuminance-dependent noise characteristics to recover the static parts of a scene, which are otherwise invisible to event cameras. We experimentally collect a dataset of noise events on static scenes to train and validate Noise2Image. Our results show that Noise2Image can robustly recover intensity images solely from noise events, providing a novel approach for capturing static scenes in event cameras, without additional hardware.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-06-30T13:05:32.340834"
        },
        {
            "source": "scholar",
            "count": 4,
            "updated": "2025-06-30T13:05:31.923359"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2404.01298"
        },
        {
            "type": "paper",
            "url": "https://opg.optica.org/optica/abstract.cfm?doi=10.1364/OPTICA.538916"
        },
        {
            "type": "project_page",
            "url": "https://www.dekelgalor.com/noise2image"
        }
    ],
    "full_name": "Noise Events to Image (NE2I)",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "doi": "10.1364/OPTICA.538916",
        "url": "https://opg.optica.org/optica/abstract.cfm?URI=optica-12-1-46",
        "year": 2025,
        "month": "jan",
        "volume": "12",
        "title": "Noise2Image: noise-enabled static scene recovery for event cameras",
        "publisher": "Optica Publishing Group",
        "pages": "46--55",
        "number": "1",
        "keywords": "Beam splitters; Cameras; CMOS cameras; Fluorescence microscopy; Neural networks; Three dimensional reconstruction",
        "journal": "Optica",
        "author": "Ruiming Cao and Dekel Galor and Amit Kohli and Jacob L. Yates and Laura Waller",
        "type": "article",
        "key": "Cao:25"
    },
    "referenced_papers": [
        {
            "doi": "10.1007/978-1-4615-2724-4_2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TVCG.2021.3067784",
            "source": "crossref"
        },
        {
            "doi": "10.1126/scirobotics.adj8124",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2022.3152999",
            "source": "crossref"
        },
        {
            "doi": "10.48550/arXiv.2109.08640",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TED.2017.2717848",
            "source": "crossref"
        },
        {
            "doi": "10.48550/arXiv.2312.00113",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV45572.2020.9093366",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2021.3052070",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2024.3372460",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TMM.2023.3260638",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2018.00118",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2013.2273537",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2015.7168735",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s18124122",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00177",
            "source": "crossref"
        },
        {
            "doi": "10.3390/app10062024",
            "source": "crossref"
        },
        {
            "doi": "10.48550/arXiv.2010.11929",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00481",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00437",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2017.00309",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00068",
            "source": "crossref"
        },
        {
            "doi": "10.48550/arXiv.2012.09378",
            "source": "crossref"
        },
        {
            "doi": "10.1364/OPTICA.538916",
            "source": "crossref"
        },
        {
            "title": "The silicon retina",
            "source": "crossref"
        },
        {
            "title": "Real-time, high-speed video decompression using a frame-and event-based Davis sensor",
            "source": "crossref"
        },
        {
            "title": "A 240 \u00d7 180 10 mW 12us latency sparse-output vision sensor for mobile applications",
            "source": "crossref"
        },
        {
            "title": "Event-aided direct sparse odometry",
            "source": "crossref"
        },
        {
            "title": "Learning to reconstruct high speed and high dynamic range videos from events",
            "source": "crossref"
        },
        {
            "title": "NeuSpike-NET: high speed video reconstruction via bio-inspired neuromorphic cameras",
            "source": "crossref"
        },
        {
            "title": "An asynchronous Kalman filter for hybrid event cameras",
            "source": "crossref"
        },
        {
            "title": "Shining light on the dvs pixel: a tutorial and discussion about biasing and optimization",
            "source": "crossref"
        },
        {
            "title": "Continuous-time intensity estimation using event cameras",
            "source": "crossref"
        },
        {
            "title": "Learning event-based motion deblurring",
            "source": "crossref"
        },
        {
            "title": "Bringing a blurry frame alive at high frame-rate with an event camera",
            "source": "crossref"
        },
        {
            "title": "Event enhanced high-quality image recovery",
            "source": "crossref"
        },
        {
            "title": "Event-driven video frame synthesis",
            "source": "crossref"
        },
        {
            "title": "Time lens: event-based video frame interpolation",
            "source": "crossref"
        },
        {
            "title": "Time lens++: event-based frame interpolation with parametric non-linear flow and multi-scale fusion",
            "source": "crossref"
        },
        {
            "title": "Unifying motion deblurring and frame interpolation with events",
            "source": "crossref"
        },
        {
            "title": "Simultaneous optical flow and intensity estimation from an event camera",
            "source": "crossref"
        },
        {
            "title": "Reducing the SIM-to-real gap for event cameras",
            "source": "crossref"
        },
        {
            "title": "Fast image reconstruction with an event camera",
            "source": "crossref"
        },
        {
            "title": "Event-based video reconstruction using transformer",
            "source": "crossref"
        },
        {
            "title": "Back to event basics: self-supervised learning of image reconstruction for event cameras via photometric constancy",
            "source": "crossref"
        },
        {
            "title": "ESIM: an open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "v2e: From video frames to realistic DVS events",
            "source": "crossref"
        },
        {
            "title": "Frame-free dynamic digital vision",
            "source": "crossref"
        },
        {
            "title": "Evaluating noise filtering for event-based asynchronous change detection image sensors",
            "source": "crossref"
        },
        {
            "title": "Design of a spatiotemporal correlation filter for event-based sensors",
            "source": "crossref"
        },
        {
            "title": "Event probability mask (EPM) and event denoising convolutional neural network (EDNCNN) for neuromorphic cameras",
            "source": "crossref"
        },
        {
            "title": "ImageNet classification with deep convolutional neural networks",
            "source": "crossref"
        },
        {
            "title": "N-imageNet: towards robust, fine-grained object recognition with event cameras",
            "source": "crossref"
        },
        {
            "title": "Video to events: recycling video datasets for event cameras",
            "source": "crossref"
        },
        {
            "title": "EventGAN: leveraging large scale image datasets for event cameras",
            "source": "crossref"
        },
        {
            "title": "NTIRE 2017 challenge on single image super-resolution: dataset and study",
            "source": "crossref"
        },
        {
            "title": "Denoising diffusion probabilistic models",
            "source": "crossref"
        },
        {
            "title": "Evreal: towards a comprehensive benchmark and analysis suite for event-based video reconstruction",
            "source": "crossref"
        },
        {
            "title": "The unreasonable effectiveness of deep features as a perceptual metric",
            "source": "crossref"
        },
        {
            "title": "Microsoft COCO: common objects in context",
            "source": "crossref"
        },
        {
            "title": "Demystifying event-based sensor biasing to optimize signal to noise for space domain awareness",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Dataset is split into two parts:
  - in-distribution set:
    - Contains 1004 images from Unsplash
  - out-of-distribution set:
    - Contains 100 images from DIV2K
