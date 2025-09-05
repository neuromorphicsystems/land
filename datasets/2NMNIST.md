---
{
    "name": "2NMNIST",
    "aliases": [],
    "year": 2023,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "ATIS"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "tags": [
        "Classification",
        "Derived Datasets"
    ],
    "description": "A Two-Label Classification Dataset based on the NMNIST",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Zenodo"
        ],
        "file_formats": [
            "Binary"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Zenodo",
                "url": "https://zenodo.org/records/7847750",
                "format": "Binary",
                "doi": "10.5281/zenodo.7847750",
                "available": true
            }
        ],
        "size_gb": 1.2,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Spikemoid: Updated Spike-based Loss Methods for Classification",
        "doi": "10.1109/IJCNN54540.2023.10191787",
        "authors": [
            "Michael Jurado",
            "Audrey Dunn",
            "Samuel Shapero"
        ],
        "abstract": "Spiking Neural Networks (SNNs) have gained research attention in recent years due to their potential as low-power computing architectures for deployment on neuromorphic hardware. The introduction of offline training capabilities like Spike Layer Error Reassignment in Time (SLAYER) and advancements in the probabilistic interpretations of SNN output reinforce SNNs as a viable alternative to Artificial Neural Networks (ANNs). Spikemax was previously introduced as a family of differentiable loss methods which use windowed spike counts to form classification probabilities. We modify the spikemaxS loss method to use rates and a scaling parameter instead of counts to form scaled-spikemax. Our mathematical analysis shows that an appropriate scaling term can yield less coarse probability outputs from the SNN and help smooth the gradient of the loss during training. Experimentally, we show that scaled-spikemax achieves faster training convergence than spikemax and results in relative improvements of 4.2% and 9.9% in accuracy for NMNIST and N-TIDIGITS18, respectively We then extend scaled-spikemax to construct a spike-based loss function for multi-label classification called spikemoid. The viability of spikemoid is shown via the first known multi-label classification results on N-TIDIGITS18 and 2NMNIST, a novel variation of NMNIST that superimposes event-driven sensory data.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 1,
            "updated": "2025-09-05T07:58:05.777621"
        },
        {
            "source": "scholar",
            "count": 2,
            "updated": "2025-09-05T07:58:07.296766"
        }
    ],
    "links": [
        {
            "type": "github_page",
            "url": "https://github.com/audreydunn/spikemoid"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10191787"
        }
    ],
    "full_name": "",
    "additional_metadata": {},
    "referenced_papers": [
        {
            "doi": "10.1016/j.asoc.2018.05.012",
            "source": "crossref"
        },
        {
            "doi": "10.1103/PhysRevE.51.738",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MSP.2019.2931595",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2018.00023",
            "source": "crossref"
        },
        {
            "doi": "10.1109/SiPS52927.2021.00053",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN55064.2022.9892379",
            "source": "crossref"
        },
        {
            "doi": "10.1016/S0361-9230(99)00161-6",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.781",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00437",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2021.3067593",
            "source": "crossref"
        },
        {
            "title": "Categorical reparameterization with gumbel-softmax",
            "source": "crossref"
        },
        {
            "title": "On calibration of modern neural networks",
            "source": "crossref"
        },
        {
            "title": "Training stochastic model recognition algorithms as networks can lead to maximum mutual information estimation of parameters",
            "source": "crossref"
        },
        {
            "title": "SLAYER: Spike layer error reassignment in time",
            "source": "crossref"
        },
        {
            "title": "1Asynchronous Binaural Spatial Audition Sensor With $2\\times 64\\times 4$ Channel Output",
            "source": "crossref"
        },
        {
            "title": "Spike-train level backpropagation fortraining deep recurrent spiking neural networks",
            "source": "crossref"
        },
        {
            "title": "Lapicque's introduction of the integrate-and-fire model neuron (1907)",
            "source": "crossref"
        }
    ],
    "bibtex": {
        "pages": "1\u20137",
        "month": "jun",
        "year": 2023,
        "author": "Jurado, Michael and Dunn, Audrey and Shapero, Samuel",
        "publisher": "IEEE",
        "booktitle": "2023 International Joint Conference on Neural Networks (IJCNN)",
        "doi": "10.1109/ijcnn54540.2023.10191787",
        "url": "http://dx.doi.org/10.1109/IJCNN54540.2023.10191787",
        "title": "Spikemoid: Updated Spike-based Loss Methods for Classification",
        "type": "inproceedings",
        "key": "Jurado_2023"
    }
}
---

# Dataset Description

2NMNIST was constructed by randomly choosing distinct digits to be superimposed on each other. The superimposition is performed by time reversing one of the two digits andFig. 6. Example of a single frame of 2NMNIST imagery createtd from
NMNIST frame superpositionoverlaying the two spike maps every timestep. Overlapping spike events are not summed in the resultant image. 

The 2NMNIST dataset is devised to evaluate multilabel classification algorithms’ capability in detecting target classes that exhibit continuous mutual interference. In the training set there are 18730 superimposed samples and 22540 images with a single digit. In the testing set there are 3114 superimposed samples and 3772 with a single digit.

Note: The download link contains the combinations of digits used in generating the results for the paper. Code to reproduce the dataset is provided in the Github repository, however, regenerating the dataset on a different machine will yield different mixtures of digits.