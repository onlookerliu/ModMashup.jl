var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#ModMashup.jl-1",
    "page": "Home",
    "title": "ModMashup.jl",
    "category": "section",
    "text": ""
},

{
    "location": "index.html#Project-Goal-and-Motivations-1",
    "page": "Home",
    "title": "Project Goal and Motivations",
    "category": "section",
    "text": "The aim of the project is to Reimplement GeneMANIA in Julia to optimize netDx for high-performance computing. "
},

{
    "location": "index.html#Why-called-ModMashup?-1",
    "page": "Home",
    "title": "Why called ModMashup?",
    "category": "section",
    "text": "Because the implementation of GeneMANIA in this package is different. We get intuitive from mashup to replace linear regression part of GeneMANIA for high-performance computing. In short, mashup learns patient embedding and we use this information to derivate network weights."
},

{
    "location": "index.html#ModMashup-API-1",
    "page": "Home",
    "title": "ModMashup API",
    "category": "section",
    "text": ""
},

{
    "location": "dev/get_start.html#",
    "page": "Quick Start",
    "title": "Quick Start",
    "category": "page",
    "text": ""
},

{
    "location": "dev/get_start.html#ModMashup.jl-1",
    "page": "Quick Start",
    "title": "ModMashup.jl",
    "category": "section",
    "text": ""
},

{
    "location": "dev/get_start.html#Quick-Start-1",
    "page": "Quick Start",
    "title": "Quick Start",
    "category": "section",
    "text": ""
},

{
    "location": "dev/get_start.html#Installation-1",
    "page": "Quick Start",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"ModMashup.jl\")"
},

{
    "location": "dev/get_start.html#Usage-1",
    "page": "Quick Start",
    "title": "Usage",
    "category": "section",
    "text": "using ModMashup"
},

{
    "location": "dev/work_in_R.html#",
    "page": "Working in R",
    "title": "Working in R",
    "category": "page",
    "text": ""
},

{
    "location": "dev/work_in_R.html#Working-with-R-1",
    "page": "Working in R",
    "title": "Working with R",
    "category": "section",
    "text": "For those who want to integrate this package into R netDx packages, just run the command steps below."
},

{
    "location": "dev/work_in_R.html#Required-Dependencies-1",
    "page": "Working in R",
    "title": "Required Dependencies",
    "category": "section",
    "text": "R\njulia 0.5 +Make sure you have R and julia installed in your computer, cd into where netDX latest packages located.cd netDx/inst/julia\nrm -rf ModMashupThen just download the ModMashup.jl from the githubgit clone --recursive https://github.com/memoiry/GeneMANIA.jl\nmv GeneMANIA"
},

{
    "location": "algo/label_propagation.html#",
    "page": "Label Propagation",
    "title": "Label Propagation",
    "category": "page",
    "text": ""
},

{
    "location": "algo/label_propagation.html#Label-Propagation-1",
    "page": "Label Propagation",
    "title": "Label Propagation",
    "category": "section",
    "text": ""
},

{
    "location": "algo/label_propagation.html#Constructor-1",
    "page": "Label Propagation",
    "title": "Constructor",
    "category": "section",
    "text": ""
},

{
    "location": "algo/label_propagation.html#Description-1",
    "page": "Label Propagation",
    "title": "Description",
    "category": "section",
    "text": ""
},

{
    "location": "algo/label_propagation.html#Example-1",
    "page": "Label Propagation",
    "title": "Example",
    "category": "section",
    "text": ""
},

{
    "location": "algo/label_propagation.html#References-1",
    "page": "Label Propagation",
    "title": "References",
    "category": "section",
    "text": ""
},

{
    "location": "algo/network_integration.html#",
    "page": "Network Integration",
    "title": "Network Integration",
    "category": "page",
    "text": ""
},

{
    "location": "algo/network_integration.html#Network-integration-1",
    "page": "Network Integration",
    "title": "Network integration",
    "category": "section",
    "text": ""
},

{
    "location": "algo/network_integration.html#ModMashup.MashupIntegration",
    "page": "Network Integration",
    "title": "ModMashup.MashupIntegration",
    "category": "Type",
    "text": "MashupIntegration(β, H, net_weights, weights_mat, cv_query, singular_value_squared, tally)\n\nModified Mashup algorithm for network integration. Inside MashupIntegration model, it contains all the result after mashup integration.\n\nβ::Vector: Beta vector as a result of linear regression.\nH::Matrix: Rows of H represent patients embendding in networks.\nnet_weights::Vector: Normalized mean network weights \nweights_mat::Matrix: Columns of weights_mat is computed network weights for each round of cross validation.\ncv_query::Matrix: Columns of cv_query is query id for each round of cross validation.\nsingular_value_squared::Vector: singular value from mashup for dimensianal reduction.\ntally::Vector{Int}: Network tally result\n\n\n\n"
},

{
    "location": "algo/network_integration.html#Constructor-1",
    "page": "Network Integration",
    "title": "Constructor",
    "category": "section",
    "text": "The package provided two algorithm for network integration, one is MashupIntegration and another is RawMashupIntegration.MashupIntegrationGeneMANIAIntegration"
},

{
    "location": "algo/network_integration.html#ModMashup.network_integration!-Tuple{ModMashup.MashupIntegration,ModMashup.GMANIA}",
    "page": "Network Integration",
    "title": "ModMashup.network_integration!",
    "category": "Method",
    "text": "network_integration!(model::MashupIntegration, database::GMANIA)\n\nImplement modified mashup network integration.\n\nInput: Database Output: network weights.\n\n\n\n"
},

{
    "location": "algo/network_integration.html#Description-1",
    "page": "Network Integration",
    "title": "Description",
    "category": "section",
    "text": "The package provide same interface for both mashup and genemania integration.network_integration!(model::MashupIntegration,database::GMANIA;random_seed::Int)"
},

{
    "location": "algo/network_integration.html#Example-1",
    "page": "Network Integration",
    "title": "Example",
    "category": "section",
    "text": ""
},

{
    "location": "algo/network_integration.html#References-1",
    "page": "Network Integration",
    "title": "References",
    "category": "section",
    "text": ""
},

]}
